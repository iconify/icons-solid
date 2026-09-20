import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn_b2syip.css';
import '../../css/m/mip881bom.css';
import '../../css/w/wdag4ei9l.css';
import '../../css/r/rrbj8pbzt.css';
import '../../css/x/xj0zsk3gb.css';
import '../../css/j/jprdkmg-c.css';
import '../../css/z/z04drlb1l.css';
import '../../css/y/y4tptcc4y.css';
import '../../css/t/tu-ph-ezr.css';
import '../../css/m/mr0asfa0s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qn_b2syip"/><path class="mip881bom"/><circle class="wdag4ei9l"/><path class="rrbj8pbzt"/><path class="xj0zsk3gb"/><path class="jprdkmg-c"/><g class="z04drlb1l"><path class="y4tptcc4y"/><path class="tu-ph-ezr"/><path class="mr0asfa0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sunset"} {...others} />);
}

export default Component;
