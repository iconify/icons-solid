import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnq8y0bii.css';
import '../../css/x/x7vykfack.css';
import '../../css/w/wh4ek8hbt.css';
import '../../css/l/lmv-lc_gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xnq8y0bii"/><path class="x7vykfack"/><path class="wh4ek8hbt"/><path class="lmv-lc_gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:broccoli"} {...others} />);
}

export default Component;
