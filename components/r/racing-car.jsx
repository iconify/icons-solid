import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4u0f0bud.css';
import '../../css/j/jjax3-3pl.css';
import '../../css/p/pj1w39-ep.css';
import '../../css/d/dxf3h3jpm.css';
import '../../css/n/nkrk4t27g.css';
import '../../css/y/ypvfr7ybu.css';
import '../../css/h/hrucgxbkc.css';
import '../../css/k/k9l7t5b0f.css';
import '../../css/k/kjeenwbhe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z4u0f0bud"/><path class="jjax3-3pl"/><path class="pj1w39-ep"/><path class="dxf3h3jpm"/><path class="nkrk4t27g"/><path class="ypvfr7ybu"/><path class="hrucgxbkc"/><path class="k9l7t5b0f"/><path class="kjeenwbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:racing-car"} {...others} />);
}

export default Component;
