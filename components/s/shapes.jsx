import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n5z9vnbeb"/><path class="wm-a x9x785x5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shapes"} {...others} />);
}

export default Component;
