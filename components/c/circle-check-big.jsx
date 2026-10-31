import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j-h4ibbbj.css';
import '../../css/v/vcra98boi.css';
import '../../css/c/chk4_ccyr.css';
import '../../css/i/i9koo_m_k.css';
import '../../css/l/l_agc4bqn.css';
import '../../css/u/uqmeqsa1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j-h4ibbbj wm-shadow"/><path class="vcra98boi"/><path class="chk4_ccyr"/><path class="i9koo_m_k"/><path class="l_agc4bqn"/><path class="uqmeqsa1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-check-big"} {...others} />);
}

export default Component;
