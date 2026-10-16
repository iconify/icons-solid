import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6t6ne13x.css';
import '../../css/v/vjvtfabym.css';
import '../../css/v/vpb3bu46w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j6t6ne13x"/><path class="vjvtfabym"/><path class="vpb3bu46w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-tank-48-bold"} {...others} />);
}

export default Component;
