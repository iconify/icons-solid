import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/f/ff63l0b3c.css';
import '../../css/l/lrg81dt7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="arrow-left-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="ff63l0b3c"/><path class="lrg81dt7m"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:arrow-left-circle-outline"} {...others} />);
}

export default Component;
