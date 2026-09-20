import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/sdam2k_0l.css';
import '../../css/c/cx3v3qcer.css';
import '../../css/m/mwhwsob7h.css';
import '../../css/n/npufftbla.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="sdam2k_0l"/><path class="cx3v3qcer"/></g><path clip-rule="evenodd" class="mwhwsob7h"/><path class="npufftbla"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:info-circle"} {...others} />);
}

export default Component;
