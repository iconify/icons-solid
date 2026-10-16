import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftnhr1gdn.css';
import '../../css/o/oobyxfbza.css';
import '../../css/q/q7hob6bqi.css';
import '../../css/a/as41gacte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 11.96 11.96)" class="ftnhr1gdn"/><path class="oobyxfbza"/><path class="q7hob6bqi"/><path class="as41gacte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-ring"} {...others} />);
}

export default Component;
