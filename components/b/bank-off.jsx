import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/l/lrceeobdw.css';
import '../../css/o/om07i518n.css';
import '../../css/y/yvk1rjkvs.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="lrceeobdw"/><path clip-rule="evenodd" class="om07i518n"/></g><path clip-rule="evenodd" class="yvk1rjkvs"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:bank-off"} {...others} />);
}

export default Component;
