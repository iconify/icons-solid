import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj-4mebdu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pj-4mebdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:wrecking-ball"} {...others} />);
}

export default Component;
