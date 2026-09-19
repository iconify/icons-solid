import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1xq18ehc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v1xq18ehc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:computer-fan"} {...others} />);
}

export default Component;
