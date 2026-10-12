import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkz8wob9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wkz8wob9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-heart-filled"} {...others} />);
}

export default Component;
