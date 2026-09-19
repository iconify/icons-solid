import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv1-spb_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rv1-spb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spiked-shoulder-armor"} {...others} />);
}

export default Component;
