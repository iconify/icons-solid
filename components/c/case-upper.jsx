import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4ntglbkz.css';
import '../../css/k/kq6pbfb4r.css';
import '../../css/j/jif4fwrfj.css';
import '../../css/s/sazhlvwun.css';
import '../../css/z/zkwtxqb2d.css';
import '../../css/q/qke4m0b5u.css';
import '../../css/i/it26hwbga.css';
import '../../css/o/oq7qybcfw.css';
import '../../css/u/ubw9wkb7e.css';
import '../../css/v/v7sgaiy5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4ntglbkz wm-shadow"/><path class="kq6pbfb4r wm-shadow"/><path class="jif4fwrfj"/><path class="sazhlvwun"/><path class="zkwtxqb2d"/><path class="qke4m0b5u"/><path class="it26hwbga"/><path class="oq7qybcfw wm-shine"/><path class="ubw9wkb7e wm-shine"/><path class="v7sgaiy5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:case-upper"} {...others} />);
}

export default Component;
