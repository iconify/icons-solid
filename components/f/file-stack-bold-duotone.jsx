import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxmr-bbpl.css';
import '../../css/m/mjeg-y3pl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f09_mkvvu.css';
import '../../css/k/kv93igb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxmr-bbpl"/><path class="mjeg-y3pl"/><g class="xtpeb-edw"><path class="f09_mkvvu"/><path class="kv93igb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-bold-duotone"} {...others} />);
}

export default Component;
