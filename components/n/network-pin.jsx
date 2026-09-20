import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dph7idlpo.css';
import '../../css/j/jjc_0eb0c.css';
import '../../css/g/gvlixzb-w.css';
import '../../css/q/qowmweb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dph7idlpo"/><path class="jjc_0eb0c"/><path class="gvlixzb-w"/><path class="qowmweb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-pin"} {...others} />);
}

export default Component;
