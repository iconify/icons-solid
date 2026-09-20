import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg35-r2sk.css';
import '../../css/n/n_--nwb1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vg35-r2sk"/><path class="n_--nwb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-update-dashboard-light"} {...others} />);
}

export default Component;
