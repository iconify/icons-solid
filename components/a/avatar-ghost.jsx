import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u25acob4b.css';
import '../../css/d/dex9zmd-o.css';
import '../../css/l/l0epombwk.css';
import '../../css/u/ubk5rmcjv.css';
import '../../css/l/l0gjml8um.css';
import '../../css/x/xcc8ulb2r.css';
import '../../css/u/uiykvmb-y.css';
import '../../css/i/inlnhvbks.css';
import '../../css/a/anc8o49yc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="u25acob4b wm-shadow"/><path class="dex9zmd-o"/><path class="l0epombwk"/><path class="ubk5rmcjv"/><path class="l0gjml8um"/><path class="xcc8ulb2r"/><path class="uiykvmb-y"/><path class="inlnhvbks wm-shine"/><path class="anc8o49yc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-ghost"} {...others} />);
}

export default Component;
