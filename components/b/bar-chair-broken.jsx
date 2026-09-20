import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xineyrtff.css';
import '../../css/r/rw1sm-ddm.css';
import '../../css/i/icusl944o.css';
import '../../css/a/awb7-ex2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xineyrtff"/><path class="rw1sm-ddm"/><path class="icusl944o"/><path class="awb7-ex2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bar-chair-broken"} {...others} />);
}

export default Component;
