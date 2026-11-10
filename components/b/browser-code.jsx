import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1a_c4b8q.css';
import '../../css/d/drc3oubtr.css';
import '../../css/g/ghdp9dbhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p1a_c4b8q"/><path class="drc3oubtr"/><path class="ghdp9dbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-code"} {...others} />);
}

export default Component;
