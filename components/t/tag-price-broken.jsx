import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b581idbbf.css';
import '../../css/e/epme-tb1k.css';
import '../../css/i/iar3qwbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b581idbbf"/><path class="epme-tb1k"/><path class="iar3qwbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-price-broken"} {...others} />);
}

export default Component;
