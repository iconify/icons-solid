import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xv4i7e3qg.css';
import '../../css/c/cp0wzmuzu.css';
import '../../css/h/hj57o6hov.css';
import '../../css/e/e9c2htbyt.css';
import '../../css/a/a1ttyubes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xv4i7e3qg"/><path class="cp0wzmuzu"/><path class="hj57o6hov"/><path class="e9c2htbyt"/><path class="a1ttyubes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-gantt"} {...others} />);
}

export default Component;
