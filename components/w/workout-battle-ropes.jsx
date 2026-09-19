import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l5-s07h8c.css';
import '../../css/k/k7e4w6bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l5-s07h8c"/><path class="k7e4w6bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-battle-ropes"} {...others} />);
}

export default Component;
