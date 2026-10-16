import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/d/dud29m81y.css';
import '../../css/a/ao3jx10od.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="dud29m81y"/><path class="ao3jx10od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-histogram-20"} {...others} />);
}

export default Component;
