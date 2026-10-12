import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkz3abbwu.css';
import '../../css/k/kt4ks6g-f.css';
import '../../css/u/uiozdbcvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kkz3abbwu"/><path class="kt4ks6g-f"/><path class="uiozdbcvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:resend-square"} {...others} />);
}

export default Component;
