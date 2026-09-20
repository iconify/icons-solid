import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7p48actu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="m7p48actu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-three-clock-fifteen-three-quarter-minutes-time-hour"} {...others} />);
}

export default Component;
