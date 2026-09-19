import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpdi5zjmy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vpdi5zjmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:winged-emblem"} {...others} />);
}

export default Component;
