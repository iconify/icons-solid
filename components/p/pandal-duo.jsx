import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vammt2bsj.css';
import '../../css/m/me2lffboy.css';
import '../../css/h/h9cw8o10n.css';
import '../../css/y/yk-rerbfp.css';
import '../../css/q/q2pcvohsl.css';
import '../../css/p/pkkfi_6fi.css';
import '../../css/x/xy8yzjl3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vammt2bsj"/><path class="me2lffboy wm-a"/><path class="h9cw8o10n"/><path class="wm-a yk-rerbfp"/><path class="q2pcvohsl"/><path class="pkkfi_6fi wm-a"/><path class="wm-a xy8yzjl3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pandal-duo"} {...others} />);
}

export default Component;
