import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyxc17_eu.css';
import '../../css/f/fg7w486wz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gyxc17_eu"/><path class="fg7w486wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:microphone-outline"} {...others} />);
}

export default Component;
