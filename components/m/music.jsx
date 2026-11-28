import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vpr67b4vu.css';
import '../../css/k/kdk4_sbmk.css';
import '../../css/d/d7bxwzrwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vpr67b4vu"/><path class="kdk4_sbmk"/><path class="d7bxwzrwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:music"} {...others} />);
}

export default Component;
