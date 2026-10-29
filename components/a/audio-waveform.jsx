import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wndgu8_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wndgu8_xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:audio-waveform"} {...others} />);
}

export default Component;
