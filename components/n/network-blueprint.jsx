import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n3ujxhifz.css';
import '../../css/k/kzvy6zb4p.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/a/a1ax18m6x.css';
import '../../css/t/tzjnnfrgr.css';
import '../../css/l/lc1o9abcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n3ujxhifz wm-deco"/><path class="kzvy6zb4p wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="a1ax18m6x wm-k"/><path class="tzjnnfrgr wm-a"/><path class="lc1o9abcp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:network-blueprint"} {...others} />);
}

export default Component;
