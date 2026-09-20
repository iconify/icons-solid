import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ou-q0db-s.css';
import '../../css/o/oo4oedcbq.css';
import '../../css/z/zbpan-bvy.css';
import '../../css/y/yebcb12-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ou-q0db-s"/><path class="oo4oedcbq"/><path class="zbpan-bvy"/><path class="yebcb12-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-line-duotone"} {...others} />);
}

export default Component;
