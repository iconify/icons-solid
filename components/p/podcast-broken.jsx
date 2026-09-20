import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z4w5lob6d.css';
import '../../css/l/lh43htbqq.css';
import '../../css/u/unm252b3m.css';
import '../../css/k/k6v9g8zhf.css';
import '../../css/v/vjikwlb8p.css';
import '../../css/o/ouxa6obfw.css';
import '../../css/i/ip0k8xrgf.css';
import '../../css/e/ezhx_r9yu.css';
import '../../css/n/n30k0z4xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z4w5lob6d"/><path class="lh43htbqq"/><path class="unm252b3m"/><path class="k6v9g8zhf"/><path class="vjikwlb8p"/><path class="ouxa6obfw"/><path class="ip0k8xrgf"/><path class="ezhx_r9yu"/><path class="n30k0z4xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-broken"} {...others} />);
}

export default Component;
