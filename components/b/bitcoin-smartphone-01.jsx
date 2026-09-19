import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bs2p8bb3r.css';
import '../../css/w/watrmtrxt.css';
import '../../css/t/td99tubxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bs2p8bb3r"/><path class="watrmtrxt"/><path class="td99tubxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-smartphone-01"} {...others} />);
}

export default Component;
