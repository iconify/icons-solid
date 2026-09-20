import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/giome7blc.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/y/y_qkefbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="giome7blc"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="y_qkefbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-opened-broken"} {...others} />);
}

export default Component;
