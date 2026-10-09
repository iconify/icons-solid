import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfx3nk7mg.css';
import '../../css/w/wqd1m4bbm.css';
import '../../css/w/w-k7occ-g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wfx3nk7mg"/><path class="wqd1m4bbm"/><path class="w-k7occ-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-habitat-48"} {...others} />);
}

export default Component;
