import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyuoj61bc.css';
import '../../css/n/nf-m5o3-v.css';
import '../../css/l/ln26x0ubc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 5.39 22.25)" class="zyuoj61bc"/><path class="nf-m5o3-v"/><path class="ln26x0ubc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-warning"} {...others} />);
}

export default Component;
