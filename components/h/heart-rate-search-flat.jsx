import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnso8x1ub.css';
import '../../css/f/f0bgt7bxk.css';
import '../../css/l/lyph55bvf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lnso8x1ub"/><path clip-rule="evenodd" class="f0bgt7bxk"/><path clip-rule="evenodd" class="lyph55bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:heart-rate-search-flat"} {...others} />);
}

export default Component;
