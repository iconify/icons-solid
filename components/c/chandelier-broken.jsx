import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wwa_f4b-v.css';
import '../../css/u/uagfkn6wc.css';
import '../../css/q/q-802zkrs.css';
import '../../css/i/itu6m7bce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wwa_f4b-v"/><path class="uagfkn6wc"/><path class="q-802zkrs"/><path class="itu6m7bce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chandelier-broken"} {...others} />);
}

export default Component;
