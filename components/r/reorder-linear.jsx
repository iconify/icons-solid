import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ncsx83b9b.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/h/hxd6ts2yz.css';
import '../../css/b/b-fd45bwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ncsx83b9b"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/><path class="b-fd45bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-linear"} {...others} />);
}

export default Component;
