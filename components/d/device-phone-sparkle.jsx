import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy180cwom.css';
import '../../css/w/w4ay-ib0k.css';
import '../../css/c/crio94knm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sy180cwom"/><path class="w4ay-ib0k"/><path class="crio94knm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-sparkle"} {...others} />);
}

export default Component;
