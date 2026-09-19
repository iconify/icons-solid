import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e96unsile.css';
import '../../css/q/qglkxjbsq.css';
import '../../css/g/gdoio2bod.css';
import '../../css/g/glvn32bhy.css';
import '../../css/z/zzeir6bkc.css';
import '../../css/v/vf9kxbbcl.css';
import '../../css/l/l-1sr1b0l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e96unsile"/><path clip-rule="evenodd" class="qglkxjbsq"/><path class="gdoio2bod"/><path clip-rule="evenodd" class="glvn32bhy"/><path class="zzeir6bkc"/><path clip-rule="evenodd" class="vf9kxbbcl"/><path class="l-1sr1b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:router-one"} {...others} />);
}

export default Component;
