import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2t8b4_yh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q2t8b4_yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:backspace"} {...others} />);
}

export default Component;
