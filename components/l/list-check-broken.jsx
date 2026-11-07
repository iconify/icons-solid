import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlaq8tbmp.css';
import '../../css/v/v3bnzubkl.css';
import '../../css/s/s5xpay_7j.css';
import '../../css/p/pre11cbbs.css';
import '../../css/q/qtz6yi5yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mlaq8tbmp"/><path class="v3bnzubkl"/><path class="s5xpay_7j"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-broken"} {...others} />);
}

export default Component;
