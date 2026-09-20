import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/slo5fwl1o.css';
import '../../css/y/yf7lmww2l.css';
import '../../css/b/b0dehhbti.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="slo5fwl1o"/><path class="yf7lmww2l"/><path class="b0dehhbti"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-broken"} {...others} />);
}

export default Component;
