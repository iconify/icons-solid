import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bflm40lpa.css';
import '../../css/z/zom5rhbrx.css';
import '../../css/p/p7fropb0k.css';
import '../../css/u/uma4_ub-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bflm40lpa"/><path class="wm-shine zom5rhbrx"/><path class="p7fropb0k"/><path class="uma4_ub-b wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:share"} {...others} />);
}

export default Component;
