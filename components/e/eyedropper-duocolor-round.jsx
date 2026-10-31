import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hek983yzr.css';
import '../../css/y/ymy21s4to.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hek983yzr"/><path class="ymy21s4to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eyedropper-duocolor-round"} {...others} />);
}

export default Component;
