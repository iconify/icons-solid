import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ucjy35kxu.css';
import '../../css/z/zh0vz4b_l.css';
import '../../css/e/e1rcv47xv.css';
import '../../css/d/dcyqs4olz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ucjy35kxu wm-k"/><path class="wm-a zh0vz4b_l"/><path class="e1rcv47xv wm-s"/><path class="dcyqs4olz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mistletoe"} {...others} />);
}

export default Component;
