import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_epzybyz.css';
import '../../css/i/ihy07ry6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r_epzybyz"/><path class="ihy07ry6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-hybrid-48-bold"} {...others} />);
}

export default Component;
