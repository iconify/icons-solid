import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mmco1-hig.css';
import '../../css/f/fai59idpe.css';
import '../../css/w/wofxy3bdj.css';
import '../../css/y/yefoqdcpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mmco1-hig wm-shadow"/><path class="fai59idpe wm-shadow"/><path class="wofxy3bdj"/><path class="yefoqdcpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ticket"} {...others} />);
}

export default Component;
