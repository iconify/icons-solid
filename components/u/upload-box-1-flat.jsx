import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opuzw1uwx.css';
import '../../css/q/qno0y1lhe.css';
import '../../css/e/eahtnssuf.css';
import '../../css/s/soytuhb8m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="opuzw1uwx"/><path class="qno0y1lhe"/><path class="eahtnssuf"/><path class="soytuhb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:upload-box-1-flat"} {...others} />);
}

export default Component;
