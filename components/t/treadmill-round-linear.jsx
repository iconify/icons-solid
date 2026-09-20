import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/c/cq2cv1b_b.css';
import '../../css/t/t6fhkwdvd.css';
import '../../css/h/h3ca8zb4y.css';
import '../../css/o/oxy-3764i.css';
import '../../css/b/bh1zhl6ba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="cq2cv1b_b"/><path class="t6fhkwdvd"/><path class="h3ca8zb4y"/><path class="oxy-3764i"/><path class="bh1zhl6ba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:treadmill-round-linear"} {...others} />);
}

export default Component;
