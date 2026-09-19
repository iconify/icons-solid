import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckqk9g60i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ckqk9g60i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:speed-boat"} {...others} />);
}

export default Component;
