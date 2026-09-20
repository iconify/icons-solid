import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxkgd3qty.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vxkgd3qty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:svg-document"} {...others} />);
}

export default Component;
