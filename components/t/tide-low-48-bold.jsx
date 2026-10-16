import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-lwp7znm.css';
import '../../css/p/puykbrbcj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n-lwp7znm"/><path class="puykbrbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-low-48-bold"} {...others} />);
}

export default Component;
