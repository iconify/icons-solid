import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/topvl6__i.css';
import '../../css/d/ds79b3bbm.css';
import '../../css/y/y4-j_bb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="topvl6__i"/><path class="ds79b3bbm"/><path class="y4-j_bb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-off"} {...others} />);
}

export default Component;
