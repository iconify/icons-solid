import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li4ol9huc.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="li4ol9huc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:dark-sunglasses"} {...others} />);
}

export default Component;
