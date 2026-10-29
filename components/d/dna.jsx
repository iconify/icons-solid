import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x4522uhjs.css';
import '../../css/n/nk-54lbig.css';
import '../../css/w/wrkbx9bny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x4522uhjs"/><path class="nk-54lbig"/><path class="wm-a wrkbx9bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dna"} {...others} />);
}

export default Component;
