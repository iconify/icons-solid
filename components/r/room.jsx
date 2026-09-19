import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v23ra87cd.css';
import '../../css/g/g8g7_q-fc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v23ra87cd"/><path class="g8g7_q-fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:room"} {...others} />);
}

export default Component;
