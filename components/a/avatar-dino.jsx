import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kgwyvtbhw.css';
import '../../css/a/aac11_wch.css';
import '../../css/q/q7735lbgz.css';
import '../../css/m/m5_s75beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kgwyvtbhw wm-shadow"/><path class="aac11_wch wm-shadow"/><path class="q7735lbgz"/><path class="m5_s75beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-dino"} {...others} />);
}

export default Component;
