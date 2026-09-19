import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9z-6laaa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x9z-6laaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:liquid-soap"} {...others} />);
}

export default Component;
