import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tg98f2bys.css';
import '../../css/b/b4ae6zb-r.css';
import '../../css/y/yw2wdncae.css';
import '../../css/s/ssofjby4d.css';
import '../../css/m/mbihc-bcr.css';
import '../../css/w/w463bhbii.css';
import '../../css/e/e-4bmobwc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tg98f2bys"/><path class="b4ae6zb-r"/><path class="yw2wdncae"/><path class="ssofjby4d"/><path class="mbihc-bcr"/><path class="w463bhbii"/><path class="e-4bmobwc"/><path class="obcs1cbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-linear"} {...others} />);
}

export default Component;
