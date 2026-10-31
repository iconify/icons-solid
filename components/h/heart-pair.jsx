import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f92hmc0qt.css';
import '../../css/u/ufa7isi8s.css';
import '../../css/t/tedk3lbzc.css';
import '../../css/n/nlvuxlacw.css';
import '../../css/u/u9e0qnb4x.css';
import '../../css/d/dl_kyxbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f92hmc0qt wm-shadow"/><path class="ufa7isi8s"/><path class="tedk3lbzc"/><path class="nlvuxlacw"/><path class="u9e0qnb4x"/><path class="dl_kyxbxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart-pair"} {...others} />);
}

export default Component;
