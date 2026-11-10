import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/py52eubva.css';
import '../../css/k/kp82sp-kv.css';
import '../../css/i/izbmr-60y.css';
import '../../css/p/pd05_2bfa.css';
import '../../css/e/ea4jx_bhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="py52eubva"/><path class="kp82sp-kv"/><path class="izbmr-60y"/><path class="pd05_2bfa"/><path class="ea4jx_bhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:parking"} {...others} />);
}

export default Component;
