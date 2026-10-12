import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye-z7eb2z.css';
import '../../css/a/aau0v3b4h.css';
import '../../css/n/n-84ou76y.css';
import '../../css/l/lqvztd0hy.css';
import '../../css/v/vu1japbay.css';
import '../../css/u/ucci88bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ye-z7eb2z"/><path class="aau0v3b4h"/><path class="n-84ou76y"/><path class="lqvztd0hy"/><rect class="vu1japbay"/><path class="ucci88bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-right-click"} {...others} />);
}

export default Component;
