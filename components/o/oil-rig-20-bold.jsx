import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmn_z5chk.css';
import '../../css/p/pn2j6edzu.css';
import '../../css/f/fh6l5_iwg.css';
import '../../css/x/x6dmml5yz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmn_z5chk"/><path class="pn2j6edzu"/><path class="fh6l5_iwg"/><path class="x6dmml5yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-rig-20-bold"} {...others} />);
}

export default Component;
