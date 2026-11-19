import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7qobfmek.css';
import '../../css/y/yi8a-q-bg.css';
import '../../css/s/sqf9_npno.css';
import '../../css/j/j3g2tvtjr.css';
import '../../css/j/jmpt_lv4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m7qobfmek"/><path class="yi8a-q-bg"/><path class="sqf9_npno"/><path class="j3g2tvtjr"/><path class="jmpt_lv4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:remote-controller-signal"} {...others} />);
}

export default Component;
