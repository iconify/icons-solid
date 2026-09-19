import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro9ew8b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ro9ew8b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:microphone-off-filled"} {...others} />);
}

export default Component;
