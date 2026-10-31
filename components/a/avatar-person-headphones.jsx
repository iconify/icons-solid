import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z6b004bwo.css';
import '../../css/p/pocmceb8d.css';
import '../../css/i/i0rrhewvg.css';
import '../../css/j/j5-ljmbzq.css';
import '../../css/z/zws93cboz.css';
import '../../css/w/wln2gdvho.css';
import '../../css/c/cvkd-ybwt.css';
import '../../css/p/p2zg_-bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z6b004bwo"/><path class="pocmceb8d"/><path class="i0rrhewvg"/><path class="j5-ljmbzq"/><path class="zws93cboz"/><path class="wln2gdvho"/><path class="cvkd-ybwt"/><path class="p2zg_-bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-person-headphones"} {...others} />);
}

export default Component;
