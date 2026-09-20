import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/s/s2tis1bpw.css';
import '../../css/k/kbv0vccca.css';
import '../../css/q/qi6q6xbdk.css';
import '../../css/i/ix2yyfqqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="s2tis1bpw"/><path class="kbv0vccca"/><path class="qi6q6xbdk"/><path class="ix2yyfqqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-2-line-duotone"} {...others} />);
}

export default Component;
