import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2w4e9bzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2w4e9bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:magic-shield"} {...others} />);
}

export default Component;
