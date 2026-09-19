import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_kis0uyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a_kis0uyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:full-wood-bucket-handle"} {...others} />);
}

export default Component;
