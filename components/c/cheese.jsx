import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvo-2sk3k.css';
import '../../css/j/jedvirhqf.css';
import '../../css/j/jz85uq4iy.css';
import '../../css/i/ihi0izblu.css';
import '../../css/f/f2r5c9rrx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wvo-2sk3k"/><path clip-rule="evenodd" class="jedvirhqf"/><path class="jz85uq4iy"/><path class="ihi0izblu"/><path class="f2r5c9rrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cheese"} {...others} />);
}

export default Component;
