import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2fl04cvb.css';
import '../../css/g/gz0-a0b3r.css';
import '../../css/w/wydunj1te.css';
import '../../css/h/hpjbnhbkx.css';
import '../../css/p/p414aabrq.css';
import '../../css/o/obs1xzb7r.css';
import '../../css/f/fi0wslbdo.css';
import '../../css/k/k4cgccrar.css';
import '../../css/m/mdqr4yxvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f2fl04cvb wm-shadow"/><path class="gz0-a0b3r wm-shadow"/><path class="wydunj1te"/><path class="hpjbnhbkx"/><path class="p414aabrq"/><path class="obs1xzb7r"/><path class="fi0wslbdo wm-shine"/><path class="k4cgccrar wm-shine"/><path class="mdqr4yxvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chevron-down"} {...others} />);
}

export default Component;
