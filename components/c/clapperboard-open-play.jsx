import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd1zls1cq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd1zls1cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clapperboard-open-play"} {...others} />);
}

export default Component;
