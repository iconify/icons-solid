import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdt07-esp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdt07-esp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-horizontal-gloss"} {...others} />);
}

export default Component;
