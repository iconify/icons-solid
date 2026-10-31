import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/i/i_2rjobrx.css';
import '../../css/y/y2pqy-b-d.css';
import '../../css/m/mt13o1qgl.css';
import '../../css/g/gsx1x9bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="i_2rjobrx"/><path class="y2pqy-b-d"/><path class="mt13o1qgl"/><path class="gsx1x9bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-check"} {...others} />);
}

export default Component;
