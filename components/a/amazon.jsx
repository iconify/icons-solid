import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc_ey41nw.css';
import '../../css/k/ko66oob-e.css';
import '../../css/x/xhkkl9buh.css';
import '../../css/z/zm-8e-b6m.css';
import '../../css/i/isq-b22bm.css';

const viewBox = {"width":603,"height":182};
const content = `<g class="hc_ey41nw"><path class="ko66oob-e"/><path class="xhkkl9buh"/><path class="zm-8e-b6m"/><use href="#SVGNYVVZbat" transform="translate(244.367)"/><path id="SVGNYVVZbat" class="isq-b22bm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amazon"} {...others} />);
}

export default Component;
