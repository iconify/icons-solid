import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mif2vhb3d.css';
import '../../css/i/i35t25ucf.css';
import '../../css/h/hjltgiuuu.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="mif2vhb3d"/><path class="i35t25ucf"/><path class="hjltgiuuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:graph-increase"} {...others} />);
}

export default Component;
