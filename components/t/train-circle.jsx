import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/u/uizqk4b9e.css';
import '../../css/c/ciwk43b4p.css';
import '../../css/l/lt-gj_bes.css';
import '../../css/e/e8prs8-2z.css';
import '../../css/k/k5ydo-boy.css';
import '../../css/v/vz8k7tp9s.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="uizqk4b9e"/><path clip-rule="evenodd" class="ciwk43b4p"/><path clip-rule="evenodd" class="lt-gj_bes"/><path class="e8prs8-2z"/><path clip-rule="evenodd" class="k5ydo-boy"/><path class="vz8k7tp9s"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:train-circle"} {...others} />);
}

export default Component;
