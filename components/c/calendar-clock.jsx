import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jtq8fgbga.css';
import '../../css/m/mk8p-nb8p.css';
import '../../css/u/ucqs7k4dl.css';
import '../../css/v/vwea52b_b.css';
import '../../css/w/wfxj8ccqb.css';
import '../../css/y/yz-vdrkks.css';
import '../../css/x/x2s1c9iwu.css';
import '../../css/t/t3jr1rbdb.css';
import '../../css/m/m_pvfwbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jtq8fgbga wm-shadow"/><path class="mk8p-nb8p wm-s"/><path class="ucqs7k4dl wm-shadow"/><path class="vwea52b_b"/><path class="wfxj8ccqb"/><path class="yz-vdrkks"/><path class="wm-s x2s1c9iwu"/><path class="t3jr1rbdb wm-s"/><path class="m_pvfwbit wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calendar-clock"} {...others} />);
}

export default Component;
