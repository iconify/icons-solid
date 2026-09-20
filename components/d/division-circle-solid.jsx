import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdgfdtbod.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="gdgfdtbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:division-circle-solid"} {...others} />);
}

export default Component;
