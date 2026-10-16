import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-t27qbeh.css';
import '../../css/a/aa3iy6bud.css';
import '../../css/d/dmj-ofbsn.css';
import '../../css/d/driooc_ci.css';
import '../../css/k/k_a8_qbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w-t27qbeh"/><path class="aa3iy6bud"/><path class="dmj-ofbsn"/><path class="driooc_ci"/><path class="k_a8_qbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stores"} {...others} />);
}

export default Component;
