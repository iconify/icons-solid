import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nwcmqsbpt.css';
import '../../css/y/y87zpc5sn.css';
import '../../css/x/xctzs9_bc.css';
import '../../css/a/a_u8cmuxy.css';
import '../../css/l/lg0z81ujb.css';
import '../../css/r/ri10h9mxk.css';
import '../../css/v/va0j451bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nwcmqsbpt"/><path class="y87zpc5sn"/><path class="xctzs9_bc"/><path class="a_u8cmuxy"/><path class="lg0z81ujb"/><path class="ri10h9mxk"/><path class="va0j451bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-fracture-linear"} {...others} />);
}

export default Component;
