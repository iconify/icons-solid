import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6gj51ubz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o6gj51ubz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:steelwing-emblem"} {...others} />);
}

export default Component;
