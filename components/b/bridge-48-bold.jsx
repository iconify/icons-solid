import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfmop767n.css';
import '../../css/r/r5try_ncs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gfmop767n"/><path class="r5try_ncs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bridge-48-bold"} {...others} />);
}

export default Component;
