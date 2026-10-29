import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n9wsv9sig.css';
import '../../css/t/t50efyb0p.css';
import '../../css/k/kxw1r_9qm.css';
import '../../css/t/tnrueneju.css';
import '../../css/e/emma5uf1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n9wsv9sig wm-deco"/><path class="t50efyb0p wm-deco"/><path class="kxw1r_9qm wm-deco"/><path class="tnrueneju wm-k"/><path class="emma5uf1l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby-blueprint"} {...others} />);
}

export default Component;
