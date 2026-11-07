import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xupi64b3d.css';
import '../../css/j/jgvwicqon.css';
import '../../css/r/ry8mqabxu.css';
import '../../css/s/sv88ewnzg.css';
import '../../css/e/em_q5npjq.css';
import '../../css/x/xo9chq19z.css';
import '../../css/s/six-1nb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xupi64b3d"/><path class="jgvwicqon"/><path class="ry8mqabxu"/><path class="sv88ewnzg"/><path class="em_q5npjq"/><circle class="xo9chq19z"/><path class="six-1nb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-broken"} {...others} />);
}

export default Component;
