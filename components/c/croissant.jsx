import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjh72yb-u.css';
import '../../css/x/x43opxnpt.css';
import '../../css/j/jzoq35z0x.css';
import '../../css/z/zhs-aqbgk.css';
import '../../css/v/vql84yd7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hjh72yb-u"/><path class="x43opxnpt"/><path class="jzoq35z0x"/><path class="zhs-aqbgk"/><path class="vql84yd7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:croissant"} {...others} />);
}

export default Component;
