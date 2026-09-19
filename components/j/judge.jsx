import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f67gkydna.css';
import '../../css/o/ol3uvlb_q.css';
import '../../css/v/vz8svzz4r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f67gkydna"/><path class="ol3uvlb_q"/><path class="vz8svzz4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:judge"} {...others} />);
}

export default Component;
