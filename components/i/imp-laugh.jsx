import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpf6b1bud.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gpf6b1bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:imp-laugh"} {...others} />);
}

export default Component;
