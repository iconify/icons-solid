import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qqrohvb8p.css';
import '../../css/i/i9spxybks.css';
import '../../css/c/cts3slb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qqrohvb8p"/><path class="i9spxybks"/><path class="cts3slb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-broken"} {...others} />);
}

export default Component;
