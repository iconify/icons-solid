import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/h/h27vhbcct.css';
import '../../css/u/uu2b0lbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="g2bmsqbnm"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="uu2b0lbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:check-circle"} {...others} />);
}

export default Component;
