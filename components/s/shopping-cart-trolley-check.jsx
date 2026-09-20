import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2uru6-hq.css';
import '../../css/k/kqkpkcbdg.css';
import '../../css/f/flj_y0s4b.css';
import '../../css/u/ucsf5iwmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q2uru6-hq"/><path clip-rule="evenodd" class="kqkpkcbdg"/><path class="flj_y0s4b"/><path class="ucsf5iwmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-cart-trolley-check"} {...others} />);
}

export default Component;
