import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mei2yt_7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mei2yt_7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:gemini-line"} {...others} />);
}

export default Component;
