import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sr5b0abom.css';
import '../../css/k/kf6pdwiej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="sr5b0abom"/><path class="kf6pdwiej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-arrow-right-sharp-fill"} {...others} />);
}

export default Component;
