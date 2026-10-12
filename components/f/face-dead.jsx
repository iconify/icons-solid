import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca2dzib3m.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/b/b5fc3ub1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ca2dzib3m"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="b5fc3ub1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-dead"} {...others} />);
}

export default Component;
