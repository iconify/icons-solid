import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf5g0ffhl.css';
import '../../css/h/huv6-s8fz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cf5g0ffhl"/><path class="huv6-s8fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-detector-20"} {...others} />);
}

export default Component;
