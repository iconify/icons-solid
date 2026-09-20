import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/pt7930ade.css';
import '../../css/m/mmcjqewpp.css';
import '../../css/l/l_ep1oxqq.css';
import '../../css/p/p8hlydmhp.css';
import '../../css/r/r0padj4iz.css';
import '../../css/n/nq9lwk--d.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="pt7930ade"/><path class="mmcjqewpp"/><path class="l_ep1oxqq"/><path class="p8hlydmhp"/><path class="r0padj4iz"/><path class="nq9lwk--d"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-square-linear"} {...others} />);
}

export default Component;
