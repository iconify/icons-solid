import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abgh_rbqn.css';
import '../../css/o/olx2f-b_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="abgh_rbqn"/><path class="olx2f-b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scrubber-48-bold"} {...others} />);
}

export default Component;
