import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvdnlfa5d.css';
import '../../css/r/r4-rvcapq.css';
import '../../css/m/mw_9bdu9k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uvdnlfa5d"/><path class="r4-rvcapq"/><path class="mw_9bdu9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-48-bold"} {...others} />);
}

export default Component;
