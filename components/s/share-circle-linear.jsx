import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtmozb3dv.css';
import '../../css/k/ky47cdc5i.css';
import '../../css/c/cwk6upbkl.css';
import '../../css/x/xtsqy_b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dtmozb3dv"/><path class="ky47cdc5i"/><path class="cwk6upbkl"/><path class="xtsqy_b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-linear"} {...others} />);
}

export default Component;
