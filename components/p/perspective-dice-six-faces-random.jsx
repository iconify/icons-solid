import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6hl0kb_c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f6hl0kb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:perspective-dice-six-faces-random"} {...others} />);
}

export default Component;
