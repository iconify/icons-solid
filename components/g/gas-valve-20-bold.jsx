import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzfv1-bcy.css';
import '../../css/w/wqemgtbkk.css';
import '../../css/x/x36h73bpv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qzfv1-bcy"/><path class="wqemgtbkk"/><path class="x36h73bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-valve-20-bold"} {...others} />);
}

export default Component;
