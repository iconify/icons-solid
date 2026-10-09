import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u19njwbvz.css';
import '../../css/s/s7vp-wbty.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u19njwbvz"/><path class="s7vp-wbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-left-48-bold"} {...others} />);
}

export default Component;
