import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/h6y8bobzg.css';
import '../../css/r/rmtqtsbnr.css';
import '../../css/u/u94erzloj.css';
import '../../css/a/atw9ddvpd.css';
import '../../css/u/u11h9wbsf.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="h6y8bobzg"/><path clip-rule="evenodd" class="rmtqtsbnr"/><path clip-rule="evenodd" class="u94erzloj"/></g><path clip-rule="evenodd" class="atw9ddvpd"/><path clip-rule="evenodd" class="u11h9wbsf"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hammer-claw-off"} {...others} />);
}

export default Component;
