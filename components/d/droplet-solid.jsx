import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/engu9tz6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="engu9tz6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:droplet-solid"} {...others} />);
}

export default Component;
