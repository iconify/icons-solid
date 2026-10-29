import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hx4bnxbxl.css';
import '../../css/r/r0vh99iju.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qm17i3bik.css';
import '../../css/g/gsm21sbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hx4bnxbxl wm-deco"/><path class="r0vh99iju wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qm17i3bik wm-k"/><path class="gsm21sbrt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:taxi-blueprint"} {...others} />);
}

export default Component;
