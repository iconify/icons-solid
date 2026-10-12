import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztt-9y66c.css';
import '../../css/q/qyg3__sbm.css';
import '../../css/k/k3tgldn6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ztt-9y66c"/><path class="qyg3__sbm"/><path class="k3tgldn6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-diamond"} {...others} />);
}

export default Component;
