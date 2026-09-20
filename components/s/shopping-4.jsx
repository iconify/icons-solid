import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/r/r7up92iqs.css';
import '../../css/w/w-d95o5ah.css';
import '../../css/q/qat376hpo.css';
import '../../css/l/liiyfpnls.css';
import '../../css/z/zd_c_3svp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="r7up92iqs"/><path class="w-d95o5ah"/><path class="qat376hpo"/><path class="liiyfpnls"/><path class="zd_c_3svp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:shopping-4"} {...others} />);
}

export default Component;
