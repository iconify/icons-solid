import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u_rs-acqu.css';
import '../../css/k/khj2usbjr.css';
import '../../css/o/on4uw4-gq.css';
import '../../css/c/cg83aj1vp.css';
import '../../css/m/maz6_ac-q.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u_rs-acqu"/><path class="khj2usbjr"/><path class="on4uw4-gq wm-shine"/><path class="cg83aj1vp wm-k"/><path class="maz6_ac-q wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:milk"} {...others} />);
}

export default Component;
