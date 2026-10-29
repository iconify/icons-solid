import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fay72gbvh.css';
import '../../css/e/ef66r4bmf.css';
import '../../css/x/xu73cdcji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fay72gbvh"/><path class="ef66r4bmf"/><path class="wm-a xu73cdcji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:santa-hat"} {...others} />);
}

export default Component;
