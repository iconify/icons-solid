import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psl9fr_lk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psl9fr_lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:sonic-boom"} {...others} />);
}

export default Component;
