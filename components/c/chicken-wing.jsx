import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epa_mreak.css';
import '../../css/n/n_y9q79kr.css';
import '../../css/r/rnqrl-b-y.css';
import '../../css/k/kjribi7or.css';
import '../../css/q/q876-cbal.css';
import '../../css/e/exjjv0b5f.css';
import '../../css/h/hqnuiikoi.css';
import '../../css/d/dq6nedjpd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="epa_mreak"><path class="n_y9q79kr"/><path class="rnqrl-b-y"/><path class="kjribi7or"/><path class="q876-cbal"/><path class="exjjv0b5f"/><path class="hqnuiikoi"/><path class="dq6nedjpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:chicken-wing"} {...others} />);
}

export default Component;
