import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kja0_8b-p.css';
import '../../css/h/hbv47lb9l.css';
import '../../css/f/fcaf33b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kja0_8b-p"/><path class="hbv47lb9l"/><path class="fcaf33b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-line-duotone"} {...others} />);
}

export default Component;
