import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zj2s57brq.css';
import '../../css/u/ufh554b_u.css';
import '../../css/f/fscppqstp.css';
import '../../css/a/ad75ombxg.css';
import '../../css/s/ski9jx6cv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zj2s57brq"/><path class="ufh554b_u wm-shadow"/><path class="fscppqstp"/><path class="ad75ombxg"/><path class="ski9jx6cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mehndi-hand"} {...others} />);
}

export default Component;
