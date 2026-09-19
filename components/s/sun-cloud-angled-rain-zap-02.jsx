import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmqlpqb5y.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/r/r_0t8tb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kmqlpqb5y"/><path class="x3xz6cc_v"/><path class="r_0t8tb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-angled-rain-zap-02"} {...others} />);
}

export default Component;
