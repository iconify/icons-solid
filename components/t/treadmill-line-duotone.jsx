import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/g/g_wv24gbb.css';
import '../../css/k/k5-iasd0n.css';
import '../../css/k/k6irs7b2t.css';
import '../../css/o/oxy-3764i.css';
import '../../css/t/t6r5srb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="g_wv24gbb"/><path class="k5-iasd0n"/><path class="k6irs7b2t"/><path class="oxy-3764i"/><path class="t6r5srb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:treadmill-line-duotone"} {...others} />);
}

export default Component;
