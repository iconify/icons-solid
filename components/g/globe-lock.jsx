import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov_fxbbjg.css';
import '../../css/d/d2vlh_j6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ov_fxbbjg"/><path class="d2vlh_j6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:globe-lock"} {...others} />);
}

export default Component;
