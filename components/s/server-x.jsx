import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8lud0bbk.css';
import '../../css/t/t909f4xxz.css';
import '../../css/j/j_e93hhyk.css';
import '../../css/s/s3_otbc9m.css';
import '../../css/o/o01iqbc4j.css';
import '../../css/i/izb20nb-l.css';
import '../../css/g/gfe7c_oxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.78 9)" class="f8lud0bbk"/><path class="t909f4xxz"/><rect transform="rotate(-90 1.78 9)" class="j_e93hhyk"/><path class="s3_otbc9m"/><path class="o01iqbc4j"/><path class="izb20nb-l"/><path class="gfe7c_oxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:server-x"} {...others} />);
}

export default Component;
