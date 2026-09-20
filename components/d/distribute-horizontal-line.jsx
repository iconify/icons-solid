import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sxqx-5kxh.css';
import '../../css/p/p5b6m0brr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sxqx-5kxh"/><rect transform="rotate(-90 10 17)" class="p5b6m0brr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:distribute-horizontal-line"} {...others} />);
}

export default Component;
