import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x9hzvhbnm.css';
import '../../css/f/f9iatzbed.css';
import '../../css/q/q8f4hobta.css';
import '../../css/k/k-s-wjxvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="x9hzvhbnm"/><path class="f9iatzbed"/><path class="q8f4hobta"/><path class="k-s-wjxvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:potion"} {...others} />);
}

export default Component;
