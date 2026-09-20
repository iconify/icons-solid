import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlaq8tbmp.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/v/v3bnzubkl.css';
import '../../css/s/s5xpay_7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mlaq8tbmp"/><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="v3bnzubkl"/><path class="s5xpay_7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-linear"} {...others} />);
}

export default Component;
