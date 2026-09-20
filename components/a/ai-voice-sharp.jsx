import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxng6ibct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxng6ibct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:ai-voice-sharp"} {...others} />);
}

export default Component;
