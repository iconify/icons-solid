import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4pf3bc8u.css';
import '../../css/n/n67p4h0hf.css';
import '../../css/a/aqc8ejbpo.css';
import '../../css/n/nkpydqb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b4pf3bc8u"/><path class="n67p4h0hf"/><path class="aqc8ejbpo"/><path class="nkpydqb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:curtains"} {...others} />);
}

export default Component;
