import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iq695i6ax.css';
import '../../css/j/jyy1emnfj.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iq695i6ax"/><path class="jyy1emnfj"/><path class="j3xl1tijc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:usb"} {...others} />);
}

export default Component;
