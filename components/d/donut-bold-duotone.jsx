import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb6znfumn.css';
import '../../css/p/p_akxtb4b.css';
import '../../css/r/r1m06l6bk.css';
import '../../css/h/h2vueubok.css';
import '../../css/h/hf0t2huca.css';
import '../../css/q/q7s3vwutz.css';
import '../../css/g/gxzeqz1iy.css';
import '../../css/i/ivxatdhgz.css';
import '../../css/k/kn5c0abxk.css';
import '../../css/u/uz_up4r6j.css';
import '../../css/n/n1w_s4spz.css';
import '../../css/o/ozvslebjw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb6znfumn"/><path class="p_akxtb4b"/><path class="r1m06l6bk"/><path class="h2vueubok"/><path class="hf0t2huca"/><path class="q7s3vwutz"/><path class="gxzeqz1iy"/><path class="ivxatdhgz"/><path class="kn5c0abxk"/><path class="uz_up4r6j"/><path class="n1w_s4spz"/><path class="ozvslebjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bold-duotone"} {...others} />);
}

export default Component;
