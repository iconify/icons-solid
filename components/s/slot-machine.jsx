import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4ipzwpsl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h4ipzwpsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:slot-machine"} {...others} />);
}

export default Component;
