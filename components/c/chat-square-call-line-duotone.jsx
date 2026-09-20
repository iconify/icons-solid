import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cwdjznwva.css';
import '../../css/l/lmjzr2g6g.css';
import '../../css/r/rwct17yif.css';
import '../../css/e/eq3frqb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cwdjznwva"/><path class="lmjzr2g6g"/><path class="rwct17yif"/><path class="eq3frqb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-call-line-duotone"} {...others} />);
}

export default Component;
