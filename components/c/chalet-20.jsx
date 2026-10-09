import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2yz0-bpw.css';
import '../../css/g/gnrh5itid.css';
import '../../css/f/fy2_l9k3b.css';
import '../../css/n/nqfv5ob5a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w2yz0-bpw"/><path class="gnrh5itid"/><path class="fy2_l9k3b"/><path class="nqfv5ob5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalet-20"} {...others} />);
}

export default Component;
