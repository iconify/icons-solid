import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2pvmcr4g.css';
import '../../css/w/wl6oy3b4s.css';
import '../../css/d/dsq5v98-c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m2pvmcr4g"/><path class="wl6oy3b4s"/><path class="dsq5v98-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:post-office-48"} {...others} />);
}

export default Component;
