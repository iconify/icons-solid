import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-ut1d-mx.css';
import '../../css/h/h_48ptbmm.css';
import '../../css/p/pkukt-9kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q-ut1d-mx"/><path class="h_48ptbmm"/><path class="pkukt-9kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds"} {...others} />);
}

export default Component;
