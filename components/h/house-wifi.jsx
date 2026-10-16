import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c20oaqmoz.css';
import '../../css/i/iskl3g_ta.css';
import '../../css/s/st-2scbtn.css';
import '../../css/t/t8aevub-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c20oaqmoz"/><path class="iskl3g_ta"/><path class="st-2scbtn"/><path class="t8aevub-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-wifi"} {...others} />);
}

export default Component;
