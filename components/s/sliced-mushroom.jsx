import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laa_ont7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="laa_ont7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sliced-mushroom"} {...others} />);
}

export default Component;
