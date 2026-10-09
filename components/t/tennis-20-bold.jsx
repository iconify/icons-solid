import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2wj_vbdg.css';
import '../../css/v/v0d4hxfqr.css';
import '../../css/c/coi900bro.css';
import '../../css/i/ilidubbxi.css';
import '../../css/u/ux60etw0a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g2wj_vbdg"/><path class="v0d4hxfqr"/><path class="coi900bro"/><path class="ilidubbxi"/><path class="ux60etw0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tennis-20-bold"} {...others} />);
}

export default Component;
