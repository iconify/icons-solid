import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tom066bwp.css';
import '../../css/i/icz6_1e1o.css';
import '../../css/b/b1ksy1x7d.css';
import '../../css/r/rd72t1bvk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="tom066bwp"><path class="icz6_1e1o"/><path class="b1ksy1x7d"/><path class="rd72t1bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:expand-crop-resize"} {...others} />);
}

export default Component;
