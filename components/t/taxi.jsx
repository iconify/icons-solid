import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s4vmq6xju.css';
import '../../css/k/katjm0mfk.css';
import '../../css/w/wqjl47b1p.css';
import '../../css/c/cmhz4xp5q.css';
import '../../css/e/eorbsebjk.css';
import '../../css/n/npd0a3bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s4vmq6xju wm-shadow"/><path class="katjm0mfk"/><path class="wqjl47b1p"/><path class="cmhz4xp5q"/><path class="eorbsebjk"/><path class="npd0a3bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:taxi"} {...others} />);
}

export default Component;
