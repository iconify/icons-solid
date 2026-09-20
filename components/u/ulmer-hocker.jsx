import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbty41bjk.css';
import '../../css/l/ly05x8yuz.css';
import '../../css/s/s2n2dsdnp.css';
import '../../css/c/c10q8ac-p.css';
import '../../css/l/la7plsbtq.css';
import '../../css/j/j5j5e9ook.css';
import '../../css/j/jwy-aecxx.css';
import '../../css/v/v6f2x6n9y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mbty41bjk"/><path class="ly05x8yuz"/><path class="s2n2dsdnp"/><path class="c10q8ac-p"/><path class="la7plsbtq"/><path class="j5j5e9ook"/><path class="jwy-aecxx"/><ellipse transform="rotate(-59.674 45.739 48.62)" class="v6f2x6n9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ulmer-hocker"} {...others} />);
}

export default Component;
