import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d-pgtlbgj.css';
import '../../css/v/vspil-doj.css';
import '../../css/s/som12ybho.css';
import '../../css/v/v53h7w87j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d-pgtlbgj wm-shadow"/><path class="vspil-doj"/><path class="som12ybho"/><path class="v53h7w87j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:signpost"} {...others} />);
}

export default Component;
