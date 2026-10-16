import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm8cqcb_j.css';
import '../../css/s/sk-a0ybqd.css';
import '../../css/d/ds88zty-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cm8cqcb_j"/><path class="sk-a0ybqd"/><path class="ds88zty-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pendulum"} {...others} />);
}

export default Component;
