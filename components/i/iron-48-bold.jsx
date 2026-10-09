import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo0h7bcsg.css';
import '../../css/r/rh51rxbog.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vo0h7bcsg"/><path class="rh51rxbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iron-48-bold"} {...others} />);
}

export default Component;
