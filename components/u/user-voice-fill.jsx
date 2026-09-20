import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8d8c1pjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y8d8c1pjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:user-voice-fill"} {...others} />);
}

export default Component;
