import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmvxeu1mh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rmvxeu1mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:kangaroo"} {...others} />);
}

export default Component;
