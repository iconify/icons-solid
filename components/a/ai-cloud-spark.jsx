import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhw_njbry.css';
import '../../css/n/nronarbyq.css';
import '../../css/l/lu98oxcho.css';
import '../../css/a/advt48bsn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jhw_njbry"/><path class="nronarbyq"/><path class="lu98oxcho"/><path class="advt48bsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-cloud-spark"} {...others} />);
}

export default Component;
