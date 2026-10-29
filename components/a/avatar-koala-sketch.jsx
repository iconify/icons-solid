import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ac4w-4l8x.css';
import '../../css/c/crugkkdfe.css';
import '../../css/f/ffmjv2bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ac4w-4l8x"/><path class="crugkkdfe wm-k"/><path class="ffmjv2bzj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-koala-sketch"} {...others} />);
}

export default Component;
