import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbqm8nb8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jbqm8nb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:traffic-cone"} {...others} />);
}

export default Component;
