import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2ok04bln.css';
import '../../css/i/iqp2h4b-l.css';
import '../../css/q/qeu4ox1-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j2ok04bln"/><path clip-rule="evenodd" class="iqp2h4b-l"/><path class="qeu4ox1-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-median"} {...others} />);
}

export default Component;
