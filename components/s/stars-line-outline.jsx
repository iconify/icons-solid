import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgnxitxfh.css';
import '../../css/i/ifl-0rxrd.css';
import '../../css/r/rfbdwevqb.css';
import '../../css/h/h2w31x3ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgnxitxfh"/><path class="ifl-0rxrd"/><path clip-rule="evenodd" class="rfbdwevqb"/><path clip-rule="evenodd" class="h2w31x3ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-outline"} {...others} />);
}

export default Component;
