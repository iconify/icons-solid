import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aki4zgn5y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aki4zgn5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:beast-eye"} {...others} />);
}

export default Component;
