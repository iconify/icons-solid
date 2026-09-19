import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/acx96kbqj.css';
import '../../css/v/v5fixrg-m.css';
import '../../css/e/ed9fnw85i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="acx96kbqj"/><path class="v5fixrg-m"/><path class="ed9fnw85i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pc-firewall"} {...others} />);
}

export default Component;
