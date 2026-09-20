import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1b1a9bhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1b1a9bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:power-socket-united-states"} {...others} />);
}

export default Component;
