import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pznenzb4y.css';
import '../../css/m/m-6qwhchs.css';
import '../../css/q/q9k3_7fdr.css';
import '../../css/l/ljad-6hjd.css';
import '../../css/x/xs9hssbnm.css';
import '../../css/u/u3grz3nvt.css';
import '../../css/y/y7nx-bcfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pznenzb4y"/><path class="m-6qwhchs"/><path class="q9k3_7fdr"/><path class="ljad-6hjd"/><path class="xs9hssbnm"/><path class="u3grz3nvt"/><path class="y7nx-bcfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-broken"} {...others} />);
}

export default Component;
