import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0wtvdbfd.css';
import '../../css/r/rn0avuaev.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j0wtvdbfd"/><path class="rn0avuaev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:candle-chart-solid"} {...others} />);
}

export default Component;
