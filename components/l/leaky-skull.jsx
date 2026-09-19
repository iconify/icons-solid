import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs2ej9a6q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hs2ej9a6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:leaky-skull"} {...others} />);
}

export default Component;
