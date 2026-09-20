import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk8cymtbp.css';
import '../../css/z/zqjy72bhi.css';
import '../../css/n/n1k_d6l3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xk8cymtbp"/><path class="zqjy72bhi"/><path class="n1k_d6l3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:deviant-art-logo-1"} {...others} />);
}

export default Component;
