import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snx1k3x0s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="snx1k3x0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:deer-head"} {...others} />);
}

export default Component;
