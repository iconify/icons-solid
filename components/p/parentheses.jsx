import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uq970lbeo.css';
import '../../css/u/ug1w3_twr.css';
import '../../css/n/nh-pmylyq.css';
import '../../css/x/x246dhb3e.css';
import '../../css/q/q-2iixm7w.css';
import '../../css/m/m1j8qrbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uq970lbeo wm-shadow"/><path class="ug1w3_twr"/><path class="nh-pmylyq"/><path class="x246dhb3e"/><path class="q-2iixm7w wm-shine"/><path class="m1j8qrbta wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:parentheses"} {...others} />);
}

export default Component;
