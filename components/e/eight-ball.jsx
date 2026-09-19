import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib0_6fb0m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ib0_6fb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:eight-ball"} {...others} />);
}

export default Component;
