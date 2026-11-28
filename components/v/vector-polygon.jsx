import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dtlif5byy.css';
import '../../css/c/cjbo7jb-n.css';
import '../../css/p/poyhsswtc.css';
import '../../css/x/xkr-l7b5x.css';
import '../../css/u/ue5e790aj.css';
import '../../css/e/e_5tj7mfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dtlif5byy"/><path class="cjbo7jb-n"/><path class="poyhsswtc"/><path class="xkr-l7b5x"/><path class="ue5e790aj"/><path class="e_5tj7mfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vector-polygon"} {...others} />);
}

export default Component;
