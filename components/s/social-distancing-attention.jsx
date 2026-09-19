import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urvk2xbkb.css';
import '../../css/p/pjp7iyk8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="urvk2xbkb"/><path class="pjp7iyk8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-attention"} {...others} />);
}

export default Component;
