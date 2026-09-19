import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3u9lnadn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j3u9lnadn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dripping-stone"} {...others} />);
}

export default Component;
