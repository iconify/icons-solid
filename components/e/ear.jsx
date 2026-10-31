import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e5n73cbmr.css';
import '../../css/r/rkult591x.css';
import '../../css/q/q_1ry0b8i.css';
import '../../css/u/ug8y1kbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e5n73cbmr wm-shadow"/><path class="rkult591x wm-shadow"/><path class="q_1ry0b8i"/><path class="ug8y1kbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ear"} {...others} />);
}

export default Component;
