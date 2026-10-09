import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/d/dmc0je7pk.css';
import '../../css/d/dc1g2de2c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="dmc0je7pk"/><path class="dc1g2de2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:football-48-bold"} {...others} />);
}

export default Component;
