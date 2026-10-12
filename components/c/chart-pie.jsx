import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr-u_gurp.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/p/p-lhv9afj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gr-u_gurp"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="p-lhv9afj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-pie"} {...others} />);
}

export default Component;
