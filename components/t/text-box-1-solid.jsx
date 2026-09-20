import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p540hcswf.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="p540hcswf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-box-1-solid"} {...others} />);
}

export default Component;
