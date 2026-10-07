import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vq4595bas.css';
import '../../css/h/hfsfjhbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vq4595bas"/><path class="hfsfjhbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-mute"} {...others} />);
}

export default Component;
