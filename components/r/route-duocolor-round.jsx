import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zx9_r_5jc.css';
import '../../css/u/uzcl_s0kh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zx9_r_5jc"/><path class="uzcl_s0kh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:route-duocolor-round"} {...others} />);
}

export default Component;
