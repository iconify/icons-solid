import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgdp55bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mgdp55bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:alarm-snooze"} {...others} />);
}

export default Component;
