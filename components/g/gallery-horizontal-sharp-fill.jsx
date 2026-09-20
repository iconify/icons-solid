import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o9ukiybod.css';
import '../../css/r/r8svpwbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o9ukiybod"/><path class="r8svpwbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-sharp-fill"} {...others} />);
}

export default Component;
