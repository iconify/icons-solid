import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srxxy_b0g.css';
import '../../css/b/b9waewb1w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="srxxy_b0g"/><path class="b9waewb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunrise-48-bold"} {...others} />);
}

export default Component;
