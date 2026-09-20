import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/j/jmxkcrfwd.css';
import '../../css/w/wrski3b_o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xypkzkhmd.css';
import '../../css/k/kga3h3bmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="jmxkcrfwd"/><path class="wrski3b_o"/><g class="mc2zb0bvp"><path class="xypkzkhmd"/><path class="kga3h3bmu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:branching-paths-down-line-duotone"} {...others} />);
}

export default Component;
