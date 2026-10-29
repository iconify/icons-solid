import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rjhr_yfqp.css';
import '../../css/w/w0tahgb7o.css';
import '../../css/u/un6g0p8cw.css';
import '../../css/f/fjtiwkodd.css';
import '../../css/u/u2-g4hbgt.css';
import '../../css/d/dt5qoccsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rjhr_yfqp"/><path class="w0tahgb7o wm-shadow"/><path class="un6g0p8cw"/><path class="fjtiwkodd"/><path class="u2-g4hbgt"/><path class="dt5qoccsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gold-ingot-engrave"} {...others} />);
}

export default Component;
