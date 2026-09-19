import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj8m8pbqi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qj8m8pbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:abdominal-armor"} {...others} />);
}

export default Component;
