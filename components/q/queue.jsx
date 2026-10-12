import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv0k8b-6d.css';
import '../../css/a/axfb90wzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hv0k8b-6d"/><path class="axfb90wzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:queue"} {...others} />);
}

export default Component;
