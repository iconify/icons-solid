import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j1dgkg6oz.css';
import '../../css/s/si2g8__sn.css';
import '../../css/o/oftmulb0b.css';
import '../../css/h/hyueljs4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="j1dgkg6oz"/><path class="si2g8__sn"/><path class="oftmulb0b"/><path class="hyueljs4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:home"} {...others} />);
}

export default Component;
