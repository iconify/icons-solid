import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhfqrokgp.css';
import '../../css/k/k-gicyhal.css';
import '../../css/c/cbu4rlgab.css';
import '../../css/o/ob5gslbbn.css';
import '../../css/g/g1f57lbke.css';
import '../../css/z/zsn9c1b_j.css';
import '../../css/h/het9pgbke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uhfqrokgp"/><path class="k-gicyhal"/><g class="cbu4rlgab"><circle class="ob5gslbbn"/><circle class="g1f57lbke"/></g><path class="zsn9c1b_j"/><path class="het9pgbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:calendar"} {...others} />);
}

export default Component;
