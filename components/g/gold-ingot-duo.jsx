import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l_kaby5pj.css';
import '../../css/i/iael-e9xn.css';
import '../../css/s/s7-0z08-m.css';
import '../../css/a/art9oydhg.css';
import '../../css/d/dt5qoccsj.css';
import '../../css/u/un6g0p8cw.css';
import '../../css/f/fjtiwkodd.css';
import '../../css/x/x_rm9u1ba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l_kaby5pj"/><path class="iael-e9xn"/><path class="s7-0z08-m wm-a"/><path class="art9oydhg wm-a"/><path class="dt5qoccsj wm-a"/><path class="un6g0p8cw"/><path class="fjtiwkodd"/><path class="x_rm9u1ba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gold-ingot-duo"} {...others} />);
}

export default Component;
