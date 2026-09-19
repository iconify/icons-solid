import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vlf1w1bpn.css';
import '../../css/v/vh4_kkb6d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="vlf1w1bpn"/><path class="vh4_kkb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btc"} {...others} />);
}

export default Component;
