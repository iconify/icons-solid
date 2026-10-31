import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ngntxzbbr.css';
import '../../css/i/ikiu082zf.css';
import '../../css/f/f_en153mb.css';
import '../../css/n/nm0j5fbmv.css';
import '../../css/d/dhp9nq2cb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ngntxzbbr wm-shadow"/><path class="ikiu082zf"/><path class="f_en153mb"/><path class="nm0j5fbmv"/><path class="dhp9nq2cb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cursor"} {...others} />);
}

export default Component;
