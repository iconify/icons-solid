import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiimvjm9v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iiimvjm9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:porcelain-vase"} {...others} />);
}

export default Component;
