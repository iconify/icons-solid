import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nl9qzn-xd.css';
import '../../css/y/yzw658yku.css';
import '../../css/w/w2iuc4byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nl9qzn-xd"/><path class="yzw658yku"/><path class="w2iuc4byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:temperature-broken"} {...others} />);
}

export default Component;
