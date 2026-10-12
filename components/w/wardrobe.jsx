import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnfzppszj.css';
import '../../css/m/m5_8fizax.css';
import '../../css/w/w3_6o9kxf.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cnfzppszj"/><rect transform="matrix(0 -1 -1 0 20.19 20.82)" class="m5_8fizax"/><path class="w3_6o9kxf"/><path class="qhkj8rbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wardrobe"} {...others} />);
}

export default Component;
