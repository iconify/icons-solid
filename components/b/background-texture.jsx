import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmvh5ebgo.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/x/xwsenzbvq.css';
import '../../css/u/ujdiqdbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cmvh5ebgo"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="xwsenzbvq"/><path class="ujdiqdbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:background-texture"} {...others} />);
}

export default Component;
