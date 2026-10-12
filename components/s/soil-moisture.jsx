import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upe856iub.css';
import '../../css/w/wy1vxpbua.css';
import '../../css/n/ns9u1ypuv.css';
import '../../css/p/pvt7zrz9l.css';
import '../../css/r/rx2l1tb0o.css';
import '../../css/n/n43j0_bcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upe856iub"/><path class="wy1vxpbua"/><path class="ns9u1ypuv"/><path class="pvt7zrz9l"/><path class="rx2l1tb0o"/><path class="n43j0_bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soil-moisture"} {...others} />);
}

export default Component;
