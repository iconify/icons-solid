import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyfgssd0z.css';
import '../../css/i/iaicy-3kp.css';
import '../../css/i/ige_o2b4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kyfgssd0z"/><path class="iaicy-3kp"/><path class="ige_o2b4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-twelve"} {...others} />);
}

export default Component;
