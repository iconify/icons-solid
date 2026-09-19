import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjuu2tb9b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gjuu2tb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bonsai-tree"} {...others} />);
}

export default Component;
