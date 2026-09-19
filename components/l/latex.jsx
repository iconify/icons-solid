import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l911c10ro.css';
import '../../css/o/owjtq1bck.css';
import '../../css/b/bscpnfz0g.css';
import '../../css/n/nr8-grdud.css';
import '../../css/b/bzia22n1w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l911c10ro"/><path class="owjtq1bck"/><path class="bscpnfz0g"/><path class="nr8-grdud"/><path class="bzia22n1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:latex"} {...others} />);
}

export default Component;
