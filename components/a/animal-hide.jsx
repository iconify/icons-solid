import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec_0u4bpt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec_0u4bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:animal-hide"} {...others} />);
}

export default Component;
