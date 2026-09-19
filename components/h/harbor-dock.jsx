import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbh6wac8t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zbh6wac8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:harbor-dock"} {...others} />);
}

export default Component;
