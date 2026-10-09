import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq1tynbis.css';
import '../../css/s/s0b8obc_s.css';
import '../../css/a/ao1_9pbds.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dq1tynbis"/><path class="s0b8obc_s"/><path class="ao1_9pbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammock-20-bold"} {...others} />);
}

export default Component;
