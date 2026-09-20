import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf6js7b8f.css';
import '../../css/v/vaybbufbw.css';
import '../../css/y/yeo9tbcpr.css';
import '../../css/h/ha7olqyfl.css';
import '../../css/b/bmfft59yj.css';
import '../../css/x/x_qs2nbdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vf6js7b8f"/><path class="vaybbufbw"/><path class="yeo9tbcpr"/><path class="ha7olqyfl"/><path class="bmfft59yj"/><path class="x_qs2nbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:badge-star-2"} {...others} />);
}

export default Component;
