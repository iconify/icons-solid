import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o70_yqgvc.css';
import '../../css/m/m8ays9b5w.css';
import '../../css/i/i062jmb6q.css';
import '../../css/v/vjomywb8z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o70_yqgvc"/><path class="m8ays9b5w"/><path class="i062jmb6q"/><path class="vjomywb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-battery-48-bold"} {...others} />);
}

export default Component;
