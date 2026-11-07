import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecuz5vb5i.css';
import '../../css/r/rpcuqth_z.css';
import '../../css/q/qk7132bts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecuz5vb5i"/><path class="rpcuqth_z"/><path class="qk7132bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-line-duotone"} {...others} />);
}

export default Component;
