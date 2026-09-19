import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e59zbs5hc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e59zbs5hc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:asian-lantern"} {...others} />);
}

export default Component;
