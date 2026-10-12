import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6h-6lb-v.css';
import '../../css/a/aloe1j30k.css';
import '../../css/d/dqo1sqauy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 15.42 8.53)" class="c6h-6lb-v"/><rect transform="matrix(-1 0 0 1 15.42 8.53)" class="aloe1j30k"/><path class="dqo1sqauy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-centerline-center"} {...others} />);
}

export default Component;
