import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/k/kt212k15j.css';
import '../../css/d/d8k53yv7i.css';
import '../../css/v/v76_p_ksy.css';
import '../../css/q/qf7wliomw.css';
import '../../css/p/p4886vfgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="kt212k15j"/><path class="d8k53yv7i"/><path class="v76_p_ksy"/><path class="qf7wliomw"/><path class="p4886vfgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wink"} {...others} />);
}

export default Component;
