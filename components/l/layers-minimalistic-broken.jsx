import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xgvf4qxdo.css';
import '../../css/r/rn1zsslsx.css';
import '../../css/k/k2j4asbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xgvf4qxdo"/><path class="rn1zsslsx"/><path class="k2j4asbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-minimalistic-broken"} {...others} />);
}

export default Component;
