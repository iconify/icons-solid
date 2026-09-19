import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/r/rc7piybql.css';
import '../../css/v/vsbbm2bdu.css';
import '../../css/b/bqfct8bxm.css';
import '../../css/x/xsd125mfh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="rc7piybql"/><path class="vsbbm2bdu"/><path class="bqfct8bxm"/><path class="xsd125mfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bitcoin"} {...others} />);
}

export default Component;
