import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doete9yan.css';
import '../../css/w/wsvb1rbkf.css';
import '../../css/p/p11hmpggb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="doete9yan"/><path class="wsvb1rbkf"/><path class="p11hmpggb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-bag-broken"} {...others} />);
}

export default Component;
