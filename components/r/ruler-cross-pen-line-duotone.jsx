import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/olhjwfbxv.css';
import '../../css/h/ht6vrl9xs.css';
import '../../css/p/ph4irppsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="olhjwfbxv"/><path class="ht6vrl9xs"/><path class="ph4irppsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-cross-pen-line-duotone"} {...others} />);
}

export default Component;
