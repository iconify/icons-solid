import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogh6e-bcy.css';
import '../../css/i/inljhnb8k.css';
import '../../css/k/khluz147i.css';
import '../../css/n/nlgevhjxn.css';
import '../../css/z/z94k-_m9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ogh6e-bcy"/><path class="inljhnb8k"/><path class="khluz147i"/><circle class="nlgevhjxn"/><path class="z94k-_m9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-settings"} {...others} />);
}

export default Component;
