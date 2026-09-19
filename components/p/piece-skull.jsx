import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p44ng8ujk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p44ng8ujk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:piece-skull"} {...others} />);
}

export default Component;
