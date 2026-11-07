import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vq8p2ub8p.css';
import '../../css/k/koojm6b6e.css';
import '../../css/g/gg51fnb0j.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vq8p2ub8p"/><path class="koojm6b6e"/><path class="gg51fnb0j"/><path class="rultmacqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-broken"} {...others} />);
}

export default Component;
