import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw-gtcb5z.css';
import '../../css/i/iqhlhebta.css';
import '../../css/h/hr-ftzb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vw-gtcb5z"/><path class="iqhlhebta"/><path class="hr-ftzb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:background-sparkle"} {...others} />);
}

export default Component;
