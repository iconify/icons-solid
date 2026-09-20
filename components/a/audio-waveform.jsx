import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi311wbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wi311wbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:audio-waveform"} {...others} />);
}

export default Component;
