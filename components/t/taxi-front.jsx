import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp2exlb-o.css';
import '../../css/g/g5g462wud.css';
import '../../css/k/kbuptu5oc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xp2exlb-o"/><path class="g5g462wud"/><path class="kbuptu5oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:taxi-front"} {...others} />);
}

export default Component;
