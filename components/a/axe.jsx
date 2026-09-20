import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgx74ybcb.css';
import '../../css/f/fxg-xfryy.css';
import '../../css/l/lsoklwbkn.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zlp9g7ban.css';
import '../../css/e/e247zypkj.css';
import '../../css/q/qy6a8fbvg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vgx74ybcb"/><path class="fxg-xfryy"/><rect transform="rotate(-30)" class="lsoklwbkn"/><g class="jn8qy4bru"><path class="zlp9g7ban"/><rect transform="rotate(-30.014)skewX(-.028)" class="e247zypkj"/><path class="qy6a8fbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:axe"} {...others} />);
}

export default Component;
