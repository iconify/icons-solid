import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo1gldv5s.css';
import '../../css/f/fjkjw2x4u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uo1gldv5s"/><path class="fjkjw2x4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crane-hook-48"} {...others} />);
}

export default Component;
