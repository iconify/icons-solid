import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nw_tn5bxe.css';
import '../../css/w/w24k1obpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nw_tn5bxe"/><path class="w24k1obpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:octagon"} {...others} />);
}

export default Component;
