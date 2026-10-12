import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/q/q9d-hjb-g.css';
import '../../css/c/cgb7-blfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="q9d-hjb-g"/><path class="cgb7-blfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:inbox"} {...others} />);
}

export default Component;
