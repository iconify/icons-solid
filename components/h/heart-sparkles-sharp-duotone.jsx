import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zwd3a68ww.css';
import '../../css/q/qz4hw_hri.css';
import '../../css/h/h2gye8b5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zwd3a68ww"/><path class="qz4hw_hri"/><path class="h2gye8b5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heart-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
