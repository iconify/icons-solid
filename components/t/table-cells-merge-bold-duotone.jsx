import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nayqy1c_r.css';
import '../../css/n/nrrsncbey.css';
import '../../css/n/nh6q7vamn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nayqy1c_r"/><path class="nrrsncbey"/><path class="nh6q7vamn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-merge-bold-duotone"} {...others} />);
}

export default Component;
