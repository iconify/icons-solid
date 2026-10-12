import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fer3w3w-u.css';
import '../../css/p/pairkob_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fer3w3w-u"/><path clip-rule="evenodd" class="pairkob_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:keyboard-music-filled"} {...others} />);
}

export default Component;
