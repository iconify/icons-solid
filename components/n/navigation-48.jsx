import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt-rfw8yt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yt-rfw8yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:navigation-48"} {...others} />);
}

export default Component;
