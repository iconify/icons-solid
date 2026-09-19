import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8dbvjb9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8dbvjb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:frankenstein-creature"} {...others} />);
}

export default Component;
