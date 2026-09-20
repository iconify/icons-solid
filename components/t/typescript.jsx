import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p83ibjbgx.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/m/mpei81s8z.css';
import '../../css/v/v41lcbbao.css';
import '../../css/z/zb1fw-bde.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p83ibjbgx"/><g class="sxsjrzbyv"><path class="mpei81s8z"/><path clip-rule="evenodd" class="v41lcbbao"/><path clip-rule="evenodd" class="zb1fw-bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:typescript"} {...others} />);
}

export default Component;
