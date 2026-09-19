import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j51pobcsm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j51pobcsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:weight-lifting-down"} {...others} />);
}

export default Component;
