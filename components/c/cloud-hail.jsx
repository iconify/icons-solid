import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz4ugxbmo.css';
import '../../css/m/mc3p6_0qk.css';
import '../../css/h/hhe40ibsi.css';
import '../../css/h/h-m-98b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xz4ugxbmo"/><path class="mc3p6_0qk"/><path class="hhe40ibsi"/><path class="h-m-98b_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-hail"} {...others} />);
}

export default Component;
