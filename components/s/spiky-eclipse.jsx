import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2-ozxjxh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x2-ozxjxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spiky-eclipse"} {...others} />);
}

export default Component;
