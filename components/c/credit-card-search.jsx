import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpani3d_n.css';
import '../../css/n/n9q-5cb_r.css';
import '../../css/o/oapnr-gja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lpani3d_n"/><path class="n9q-5cb_r"/><path class="oapnr-gja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-search"} {...others} />);
}

export default Component;
