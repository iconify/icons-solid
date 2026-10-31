import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/t/tp82w7b8j.css';
import '../../css/x/x89uptzer.css';
import '../../css/n/nyzlhyn8x.css';
import '../../css/y/y0qf6yjzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="tp82w7b8j"/><path class="x89uptzer"/><path class="nyzlhyn8x"/><path class="y0qf6yjzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-search"} {...others} />);
}

export default Component;
