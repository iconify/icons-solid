import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oln_hsbub.css';
import '../../css/b/bf6u4_bha.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="oln_hsbub"/><path transform="scale(128 160)" class="bf6u4_bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-sct-4x3"} {...others} />);
}

export default Component;
