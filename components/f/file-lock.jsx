import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/t/t20xnac_q.css';
import '../../css/c/c6quv0_-z.css';
import '../../css/c/c5oh-qbkc.css';
import '../../css/f/fmjg88g6v.css';
import '../../css/t/tus9njbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="t20xnac_q"/><path class="c6quv0_-z"/><path class="c5oh-qbkc"/><path class="fmjg88g6v"/><path class="tus9njbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:file-lock"} {...others} />);
}

export default Component;
