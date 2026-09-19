import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddghpn2-o.css';
import '../../css/m/mh06cqblr.css';
import '../../css/a/axf4zcygn.css';
import '../../css/v/vbqbujntv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="ddghpn2-o"/><path class="mh06cqblr"/><path class="axf4zcygn"/><path class="vbqbujntv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-down"} {...others} />);
}

export default Component;
