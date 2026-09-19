import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sekq7wn5w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sekq7wn5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crossed-pistols"} {...others} />);
}

export default Component;
