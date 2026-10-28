import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thrtcftnz.css';
import '../../css/p/pwwin-bfe.css';
import '../../css/t/tya38hbod.css';
import '../../css/e/etlq6mb5b.css';
import '../../css/j/jndoisizm.css';
import '../../css/d/db-o02b8y.css';
import '../../css/p/p30rntbvy.css';
import '../../css/y/yich3gzom.css';
import '../../css/i/iq3hpnb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(-45 3.81 11.97)" class="thrtcftnz"/><circle transform="rotate(-45 12.03 20.19)" class="pwwin-bfe"/><circle transform="rotate(-45 11.97 3.81)" class="tya38hbod"/><circle transform="rotate(-45 20.19 12.03)" class="etlq6mb5b"/><circle transform="rotate(-45 3.81 11.97)" class="jndoisizm"/><circle transform="rotate(-45 12.03 20.19)" class="db-o02b8y"/><circle transform="rotate(-45 11.97 3.81)" class="p30rntbvy"/><circle transform="rotate(-45 20.19 12.03)" class="yich3gzom"/><path class="iq3hpnb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:topology"} {...others} />);
}

export default Component;
