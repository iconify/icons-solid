import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n1a2vbcyq.css';
import '../../css/f/f7pgedcvr.css';
import '../../css/b/b3gzqqb0d.css';
import '../../css/c/c_glv4cni.css';
import '../../css/l/lhegzwfbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n1a2vbcyq wm-shadow"/><path class="f7pgedcvr wm-shadow"/><path class="b3gzqqb0d"/><path class="c_glv4cni"/><path class="lhegzwfbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:backpack"} {...others} />);
}

export default Component;
