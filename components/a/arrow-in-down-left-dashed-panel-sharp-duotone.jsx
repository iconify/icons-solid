import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jrdz-v_np.css';
import '../../css/d/dym86ebju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jrdz-v_np"/><path class="dym86ebju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-down-left-dashed-panel-sharp-duotone"} {...others} />);
}

export default Component;
