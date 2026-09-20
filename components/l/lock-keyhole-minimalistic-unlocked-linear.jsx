import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c3buh4fbk.css';
import '../../css/p/pdyvfubiy.css';
import '../../css/d/d_tqh4qme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c3buh4fbk"/><path class="pdyvfubiy"/><path class="d_tqh4qme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-minimalistic-unlocked-linear"} {...others} />);
}

export default Component;
