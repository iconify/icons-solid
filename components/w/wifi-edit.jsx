import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghs0_fbmx.css';
import '../../css/z/zya_w1bxn.css';
import '../../css/k/kvyt1cbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ghs0_fbmx"/><rect transform="rotate(-45 26.16 -15.15)scale(1 -1)" class="zya_w1bxn"/><path class="kvyt1cbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wifi-edit"} {...others} />);
}

export default Component;
