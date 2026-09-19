import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm9ilcwjg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sm9ilcwjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:window-bars"} {...others} />);
}

export default Component;
