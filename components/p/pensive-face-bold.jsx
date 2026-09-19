import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4kr7db0h.css';
import '../../css/h/hfq8jpu7i.css';
import '../../css/w/wy2n5sbyh.css';
import '../../css/w/wekf8bf4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k4kr7db0h"><circle class="hfq8jpu7i"/><path class="wy2n5sbyh"/><path class="wekf8bf4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pensive-face-bold"} {...others} />);
}

export default Component;
