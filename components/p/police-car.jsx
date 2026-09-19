import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwhh4yb7x.css';
import '../../css/m/m6ip-6j1z.css';
import '../../css/j/j5tpb0ucx.css';
import '../../css/r/r0gb3ybeq.css';
import '../../css/w/wlj1xm66g.css';
import '../../css/i/ij0i0b03y.css';
import '../../css/y/yj7b-h09p.css';
import '../../css/k/k7g3ldbpu.css';
import '../../css/p/pejdnbbrv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qwhh4yb7x"/><path class="m6ip-6j1z"/><path class="j5tpb0ucx"/><path class="r0gb3ybeq"/><path class="wlj1xm66g"/><path clip-rule="evenodd" class="ij0i0b03y"/><path class="yj7b-h09p"/><path class="k7g3ldbpu"/><path class="pejdnbbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:police-car"} {...others} />);
}

export default Component;
