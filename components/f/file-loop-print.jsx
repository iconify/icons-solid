import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/t/tfgfbf3ck.css';
import '../../css/d/dtabfgpwq.css';
import '../../css/b/byo6l4-jy.css';
import '../../css/s/snj6n0nhb.css';
import '../../css/m/m9veq_bpm.css';
import '../../css/e/eql07jbbe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="tfgfbf3ck"/><path clip-rule="evenodd" class="dtabfgpwq"/><path class="byo6l4-jy"/><path clip-rule="evenodd" class="snj6n0nhb"/></g><path clip-rule="evenodd" class="m9veq_bpm"/><path clip-rule="evenodd" class="eql07jbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:file-loop-print"} {...others} />);
}

export default Component;
