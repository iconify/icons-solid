import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w4fklccqs.css';
import '../../css/x/x2wfbzbcz.css';
import '../../css/f/fkvw3pbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w4fklccqs"/><path class="wm-a x2wfbzbcz"/><path class="fkvw3pbgy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fingerprint-duo"} {...others} />);
}

export default Component;
