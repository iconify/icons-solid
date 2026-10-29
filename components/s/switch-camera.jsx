import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6w4h06su.css';
import '../../css/l/lqgqyob1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i6w4h06su"/><path class="lqgqyob1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:switch-camera"} {...others} />);
}

export default Component;
