import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no5sv1bvy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="no5sv1bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:winchester-rifle"} {...others} />);
}

export default Component;
