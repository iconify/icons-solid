import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s85zepkkg.css';
import '../../css/r/r06c8lbss.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s85zepkkg"/><path class="r06c8lbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refuse-truck-48"} {...others} />);
}

export default Component;
