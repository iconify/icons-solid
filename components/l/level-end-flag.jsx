import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8iorx6kd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c8iorx6kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:level-end-flag"} {...others} />);
}

export default Component;
