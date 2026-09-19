import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3h_-gbgh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3h_-gbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:light-fighter"} {...others} />);
}

export default Component;
