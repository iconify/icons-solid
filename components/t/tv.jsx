import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/addmy0bsb.css';
import '../../css/u/uvxpl2qsi.css';
import '../../css/w/wia1rm1ya.css';
import '../../css/y/ys20mbbru.css';
import '../../css/r/rszea5viq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="addmy0bsb wm-shadow"/><path class="uvxpl2qsi"/><path class="wia1rm1ya"/><path class="ys20mbbru"/><path class="rszea5viq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tv"} {...others} />);
}

export default Component;
