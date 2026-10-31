import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mpiosktxv.css';
import '../../css/o/ouo36c9qn.css';
import '../../css/c/c4xx8f2tm.css';
import '../../css/e/e3xo0ln4v.css';
import '../../css/g/g209xx4kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mpiosktxv wm-shadow"/><path class="ouo36c9qn"/><path class="c4xx8f2tm"/><path class="e3xo0ln4v"/><path class="g209xx4kb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:plug-zap"} {...others} />);
}

export default Component;
