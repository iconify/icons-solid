import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp_tt3b4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jp_tt3b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:moon-orbit"} {...others} />);
}

export default Component;
