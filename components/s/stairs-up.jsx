import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgd048bxt.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/f/fdxfv3b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xgd048bxt"/><path class="c_9t11wpq"/><path class="fdxfv3b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stairs-up"} {...others} />);
}

export default Component;
