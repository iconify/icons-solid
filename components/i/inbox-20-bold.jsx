import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfgux_bnw.css';
import '../../css/c/cnwk2jbdp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rfgux_bnw"/><path class="cnwk2jbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inbox-20-bold"} {...others} />);
}

export default Component;
