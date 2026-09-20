import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hognm4jxm.css';
import '../../css/z/zlax79hmy.css';
import '../../css/a/auzyv3bch.css';
import '../../css/n/n_45qf4se.css';
import '../../css/e/ewo3jxb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hognm4jxm"/><path class="zlax79hmy"/><path class="auzyv3bch"/><path class="n_45qf4se"/><path class="ewo3jxb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-broken"} {...others} />);
}

export default Component;
