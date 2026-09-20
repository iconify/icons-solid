import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fftf10baj.css';
import '../../css/b/bb0qc8mtr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="fftf10baj"/><path class="bb0qc8mtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:device"} {...others} />);
}

export default Component;
