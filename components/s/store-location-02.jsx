import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j79gsgb3b.css';
import '../../css/b/bg5-es3pu.css';
import '../../css/s/silx_qdiv.css';
import '../../css/x/xrtu0pbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j79gsgb3b"/><path class="bg5-es3pu"/><path class="silx_qdiv"/><path class="xrtu0pbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-location-02"} {...others} />);
}

export default Component;
