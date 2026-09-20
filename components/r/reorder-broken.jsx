import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c-bheu_of.css';
import '../../css/y/ypha6jbll.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/h/hxd6ts2yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c-bheu_of"/><path class="ypha6jbll"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-broken"} {...others} />);
}

export default Component;
