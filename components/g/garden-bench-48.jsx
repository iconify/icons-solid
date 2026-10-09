import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyrr7ohpi.css';
import '../../css/v/v_nw6fb-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fyrr7ohpi"/><path class="v_nw6fb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garden-bench-48"} {...others} />);
}

export default Component;
