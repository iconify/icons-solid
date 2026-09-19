import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4vn-2u8v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f4vn-2u8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pearl-necklace"} {...others} />);
}

export default Component;
