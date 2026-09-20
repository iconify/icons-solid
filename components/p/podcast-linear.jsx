import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z4w5lob6d.css';
import '../../css/l/lh43htbqq.css';
import '../../css/u/unm252b3m.css';
import '../../css/m/m_luarg2r.css';
import '../../css/c/ckcro3bjk.css';
import '../../css/i/ip0k8xrgf.css';
import '../../css/e/ezhx_r9yu.css';
import '../../css/n/n30k0z4xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z4w5lob6d"/><path class="lh43htbqq"/><path class="unm252b3m"/><path class="m_luarg2r"/><path class="ckcro3bjk"/><path class="ip0k8xrgf"/><path class="ezhx_r9yu"/><path class="n30k0z4xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-linear"} {...others} />);
}

export default Component;
