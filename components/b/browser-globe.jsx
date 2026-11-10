import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz4l92b3x.css';
import '../../css/l/ld1a3dbnb.css';
import '../../css/r/rwg5m13ar.css';
import '../../css/g/gumqc9euk.css';
import '../../css/x/x4zhyxbay.css';
import '../../css/s/sh-eo5bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qz4l92b3x"/><path class="ld1a3dbnb"/><circle class="rwg5m13ar"/><circle class="gumqc9euk"/><ellipse class="x4zhyxbay"/><path class="sh-eo5bhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-globe"} {...others} />);
}

export default Component;
