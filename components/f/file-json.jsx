import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/p/pvxuwjbhi.css';
import '../../css/i/ifeqq56ub.css';
import '../../css/v/vdjluacns.css';
import '../../css/j/jhnw8terd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="pvxuwjbhi"/><path class="ifeqq56ub"/><path class="vdjluacns"/><path class="jhnw8terd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-json"} {...others} />);
}

export default Component;
