import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg7q3o5tc.css';
import '../../css/y/y6xsb0p_q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xg7q3o5tc"/><path class="y6xsb0p_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-48"} {...others} />);
}

export default Component;
