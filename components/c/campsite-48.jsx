import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgrtu-b6i.css';
import '../../css/n/nq7uy796s.css';
import '../../css/g/gfmzq89ku.css';
import '../../css/x/x073nxb-w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgrtu-b6i"/><path class="nq7uy796s"/><path class="gfmzq89ku"/><path class="x073nxb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:campsite-48"} {...others} />);
}

export default Component;
