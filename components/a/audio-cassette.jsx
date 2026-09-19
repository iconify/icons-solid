import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwfg2eecu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vwfg2eecu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:audio-cassette"} {...others} />);
}

export default Component;
