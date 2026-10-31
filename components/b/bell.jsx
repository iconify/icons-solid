import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j9yl3cc4a.css';
import '../../css/t/tqx1j3bwv.css';
import '../../css/p/pife0lb_o.css';
import '../../css/r/rztsc3bpw.css';
import '../../css/s/shte9bcuj.css';
import '../../css/i/i5r8li2eq.css';
import '../../css/f/fhqy0cywu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="j9yl3cc4a"/><path class="tqx1j3bwv"/><path class="pife0lb_o wm-shine"/><path class="rztsc3bpw wm-k"/><path class="shte9bcuj wm-a"/><path class="i5r8li2eq"/><path class="fhqy0cywu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bell"} {...others} />);
}

export default Component;
