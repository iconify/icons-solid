import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxai5t9tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxai5t9tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:audio-waveform-line"} {...others} />);
}

export default Component;
