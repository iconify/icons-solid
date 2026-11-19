import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ka67tpb7c.css';
import '../../css/q/q0nbuwbjn.css';
import '../../css/r/rmn6dbehz.css';
import '../../css/a/azqnf7bfx.css';
import '../../css/w/wxr7z_-bc.css';
import '../../css/s/sjze9xhyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ka67tpb7c"/><path class="q0nbuwbjn"/><path class="rmn6dbehz"/><circle class="azqnf7bfx"/><circle class="wxr7z_-bc"/><path class="sjze9xhyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car"} {...others} />);
}

export default Component;
