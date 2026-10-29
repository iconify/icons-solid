import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fsii3zsmr.css';
import '../../css/j/j7zbqvg7v.css';
import '../../css/i/ik857bg1p.css';
import '../../css/i/iagn37brf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fsii3zsmr"/><path class="j7zbqvg7v wm-a"/><path class="ik857bg1p wm-a"/><path class="iagn37brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:library-duo"} {...others} />);
}

export default Component;
