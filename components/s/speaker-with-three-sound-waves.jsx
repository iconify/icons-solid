import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih80zmben.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ih80zmben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:speaker-with-three-sound-waves"} {...others} />);
}

export default Component;
