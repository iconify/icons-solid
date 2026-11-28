import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xw77b1bve.css';
import '../../css/l/lmy0--z2j.css';
import '../../css/c/c63inrb1x.css';
import '../../css/j/j_q0hoqsx.css';
import '../../css/u/uo51fob2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xw77b1bve"/><path class="lmy0--z2j"/><path class="c63inrb1x"/><path class="j_q0hoqsx"/><path class="uo51fob2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:whale"} {...others} />);
}

export default Component;
