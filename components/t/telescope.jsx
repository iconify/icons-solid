import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/x/xk2d1_bao.css';
import '../../css/z/z34odrbhq.css';
import '../../css/f/f8qe98sbx.css';
import '../../css/c/clvwm9bul.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="xk2d1_bao"/><path class="z34odrbhq"/><path class="f8qe98sbx"/><path class="clvwm9bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:telescope"} {...others} />);
}

export default Component;
