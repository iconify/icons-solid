import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx-1ftb9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jx-1ftb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:freedom-dove"} {...others} />);
}

export default Component;
