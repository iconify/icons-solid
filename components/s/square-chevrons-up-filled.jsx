import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9g45xbau.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s9g45xbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-chevrons-up-filled"} {...others} />);
}

export default Component;
