import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xscxw-bfa.css';
import '../../css/a/ak-l-xbnm.css';
import '../../css/a/aieq2_btc.css';
import '../../css/j/jojyntb-y.css';
import '../../css/z/ztzrfkqqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xscxw-bfa"/><path class="ak-l-xbnm"/><path class="aieq2_btc"/><path class="jojyntb-y"/><path class="ztzrfkqqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x3-broken"} {...others} />);
}

export default Component;
