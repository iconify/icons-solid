import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9-d4cb5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s9-d4cb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:hunter-eyes"} {...others} />);
}

export default Component;
