import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qee7o7hwy.css';
import '../../css/r/rchtrhc_y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qee7o7hwy"/><path class="rchtrhc_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-48-bold"} {...others} />);
}

export default Component;
