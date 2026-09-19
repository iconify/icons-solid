import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay1z2s6ca.css';

const viewBox = {"width":500,"height":512};
const content = `<path class="ay1z2s6ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:crafttweaker"} {...others} />);
}

export default Component;
