import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-dtby3xj.css';
import '../../css/j/j95cjpbyr.css';
import '../../css/x/xu73cdcji.css';
import '../../css/f/fay72gbvh.css';
import '../../css/e/ef66r4bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z-dtby3xj"/><path class="j95cjpbyr wm-a"/><path class="wm-a xu73cdcji"/><path class="fay72gbvh"/><path class="ef66r4bmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:santa-hat-duo"} {...others} />);
}

export default Component;
