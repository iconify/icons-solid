import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u26p2qdhu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u26p2qdhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:falling-boulder"} {...others} />);
}

export default Component;
