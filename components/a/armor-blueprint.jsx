import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikpt8rj5s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ikpt8rj5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:armor-blueprint"} {...others} />);
}

export default Component;
