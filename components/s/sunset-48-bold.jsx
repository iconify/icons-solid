import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srxxy_b0g.css';
import '../../css/v/va3-tmdaw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="srxxy_b0g"/><path class="va3-tmdaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunset-48-bold"} {...others} />);
}

export default Component;
