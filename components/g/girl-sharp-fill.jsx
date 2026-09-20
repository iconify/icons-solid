import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/va0w6bpvg.css';
import '../../css/m/mz62r9oet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="va0w6bpvg"/><path class="mz62r9oet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:girl-sharp-fill"} {...others} />);
}

export default Component;
