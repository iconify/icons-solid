import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tqw4osbms.css';
import '../../css/m/mti-algxy.css';
import '../../css/q/qj5h-ib_y.css';
import '../../css/e/ed1otty8l.css';
import '../../css/g/g660alolo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tqw4osbms"/><path class="mti-algxy wm-k"/><path class="qj5h-ib_y wm-a"/><path class="ed1otty8l wm-k"/><path class="g660alolo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffin-sketch"} {...others} />);
}

export default Component;
