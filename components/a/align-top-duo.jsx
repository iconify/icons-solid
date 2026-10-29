import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oy6gsz-qj.css';
import '../../css/w/wj05nbxlz.css';
import '../../css/g/g4o146b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oy6gsz-qj wm-a"/><path class="wj05nbxlz"/><path class="g4o146b6z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-top-duo"} {...others} />);
}

export default Component;
