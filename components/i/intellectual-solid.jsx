import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu6k__gts.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="pu6k__gts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:intellectual-solid"} {...others} />);
}

export default Component;
