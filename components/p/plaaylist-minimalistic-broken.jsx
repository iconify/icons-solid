import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/z/z9-kayyqj.css';
import '../../css/y/y-maskbat.css';
import '../../css/i/iq-a2cc9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pqx2-oyar"/><path class="z9-kayyqj"/><path class="y-maskbat"/><path class="iq-a2cc9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plaaylist-minimalistic-broken"} {...others} />);
}

export default Component;
