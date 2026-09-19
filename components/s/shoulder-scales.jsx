import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbl3c2qzk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pbl3c2qzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:shoulder-scales"} {...others} />);
}

export default Component;
