import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh8bewyfl.css';
import '../../css/o/og22cacws.css';
import '../../css/n/nu0_5ml7c.css';
import '../../css/x/x-fir8bsc.css';
import '../../css/u/ubhx6pb3u.css';
import '../../css/q/q9qq6ybqp.css';
import '../../css/r/rgten4bya.css';
import '../../css/e/ebbqqtbth.css';
import '../../css/q/qk8_crbrg.css';

const viewBox = {"width":41,"height":40};
const content = `<g class="ft5dv1b6b"><path class="kh8bewyfl"/><path class="og22cacws"/><path class="nu0_5ml7c"/><path class="x-fir8bsc"/><path class="ubhx6pb3u"/><path class="q9qq6ybqp"/><path class="rgten4bya"/><path class="ebbqqtbth"/><path class="qk8_crbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:appflowy"} {...others} />);
}

export default Component;
