import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f56xg1bhf.css';
import '../../css/s/swod1gpfm.css';
import '../../css/z/z1g_9wh2e.css';
import '../../css/k/k7lkoqbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f56xg1bhf"/><path class="swod1gpfm"/><path class="z1g_9wh2e"/><path class="k7lkoqbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calculator-01"} {...others} />);
}

export default Component;
