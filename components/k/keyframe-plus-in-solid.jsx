import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8nh6fim.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pa8nh6fim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-plus-in-solid"} {...others} />);
}

export default Component;
