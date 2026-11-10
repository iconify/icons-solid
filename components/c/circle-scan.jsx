import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrt7de4ao.css';
import '../../css/m/mlbyze8aq.css';
import '../../css/s/snznu9z-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lrt7de4ao"/><circle class="mlbyze8aq"/><path clip-rule="evenodd" class="snznu9z-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle-scan"} {...others} />);
}

export default Component;
