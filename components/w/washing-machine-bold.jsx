import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugzgtbblb.css';
import '../../css/n/nrq1a9bgn.css';
import '../../css/v/vuq_pubgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ugzgtbblb"/><path class="nrq1a9bgn"/><path clip-rule="evenodd" class="vuq_pubgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-bold"} {...others} />);
}

export default Component;
