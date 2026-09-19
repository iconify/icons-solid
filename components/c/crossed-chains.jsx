import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfrfi7yif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jfrfi7yif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:crossed-chains"} {...others} />);
}

export default Component;
