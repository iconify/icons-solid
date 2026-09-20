import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wvcj-vi3u.css';
import '../../css/a/a0ljpns4v.css';
import '../../css/k/kyzqyvbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wvcj-vi3u"/><path class="a0ljpns4v"/><path class="kyzqyvbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-broken"} {...others} />);
}

export default Component;
