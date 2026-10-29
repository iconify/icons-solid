import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0oycq_nl.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yrgy9sbkx.css';
import '../../css/e/e3ezlzbav.css';
import '../../css/y/ydp1h6beg.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jptsfvb9e.css';
import '../../css/d/dl7e98bdt.css';
import '../../css/d/dkjjntbkl.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGlrUhze9e" class="m0oycq_nl"/></defs><g class="t_2lkqbxb"><path class="wm-shadow yrgy9sbkx"/><path class="e3ezlzbav"/><path class="ydp1h6beg"/><use href="#SVGlrUhze9e" class="d2kvgvbvc"/><path class="jptsfvb9e"/><use href="#SVGlrUhze9e" class="d2kvgvbvc"/><path class="dl7e98bdt"/><path class="dkjjntbkl wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:timer"} {...others} />);
}

export default Component;
