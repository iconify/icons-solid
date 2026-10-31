import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/ww0y27bfj.css';
import '../../css/u/uwm6qh_ie.css';
import '../../css/z/zei5r0rin.css';
import '../../css/w/wxb_2fc6y.css';
import '../../css/q/q-h2pab8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ww0y27bfj"/><path class="uwm6qh_ie wm-shadow"/><path class="zei5r0rin"/><path class="wxb_2fc6y"/><path class="q-h2pab8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:contact"} {...others} />);
}

export default Component;
