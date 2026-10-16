import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2ysngb0i.css';
import '../../css/e/ejksd6blo.css';
import '../../css/g/gszeo4h3u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y2ysngb0i"/><path class="ejksd6blo"/><path class="gszeo4h3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-tank-48"} {...others} />);
}

export default Component;
