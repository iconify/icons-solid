import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/runpznbra.css';
import '../../css/b/bux8_gbvv.css';
import '../../css/g/ga7n45b4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="runpznbra wm-k"/><path class="bux8_gbvv wm-k"/><path class="ga7n45b4t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-of-contents-sketch"} {...others} />);
}

export default Component;
