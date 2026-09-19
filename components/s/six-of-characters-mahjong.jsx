import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxma8lbox.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="uxma8lbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:six-of-characters-mahjong"} {...others} />);
}

export default Component;
