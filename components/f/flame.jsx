import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/senf79cxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="senf79cxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:flame"} {...others} />);
}

export default Component;
