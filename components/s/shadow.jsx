import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vawjih8tq.css';
import '../../css/h/h27vhbcct.css';
import '../../css/v/vnebiabye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vawjih8tq"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/><path class="vnebiabye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shadow"} {...others} />);
}

export default Component;
