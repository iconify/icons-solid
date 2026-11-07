import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wwa_f4b-v.css';
import '../../css/x/xw-fhxbcm.css';
import '../../css/e/e4_wjujxt.css';
import '../../css/k/kx7ftwqzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wwa_f4b-v"/><path class="xw-fhxbcm"/><path class="e4_wjujxt"/><path class="kx7ftwqzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chandelier-line-duotone"} {...others} />);
}

export default Component;
