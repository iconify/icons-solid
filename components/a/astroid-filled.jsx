import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw-8x5o7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pw-8x5o7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:astroid-filled"} {...others} />);
}

export default Component;
