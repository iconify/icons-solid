import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv4kzimdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv4kzimdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:chat-voice-ai-fill"} {...others} />);
}

export default Component;
