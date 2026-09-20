import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nug48ridb.css';
import '../../css/e/e9aohwxwp.css';
import '../../css/s/spdwh3t1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nug48ridb"/><path class="e9aohwxwp"/><path class="spdwh3t1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-2-broken"} {...others} />);
}

export default Component;
