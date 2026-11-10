import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m25r3cbwi.css';
import '../../css/t/t1lt3u4_o.css';
import '../../css/v/v3lv0eqhk.css';
import '../../css/w/wg70jprhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m25r3cbwi"/><path class="t1lt3u4_o"/><path class="v3lv0eqhk"/><path class="wg70jprhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-card"} {...others} />);
}

export default Component;
