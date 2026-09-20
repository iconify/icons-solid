import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u_p8_wgxf.css';
import '../../css/x/xmtisibat.css';
import '../../css/b/b22-7qb1v.css';
import '../../css/a/a8zd5hbca.css';
import '../../css/t/t9kq6vbei.css';
import '../../css/t/tlh989bna.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u_p8_wgxf"/><path class="xmtisibat"/><path class="b22-7qb1v"/><path class="a8zd5hbca"/><path class="t9kq6vbei"/><path class="tlh989bna"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-linear"} {...others} />);
}

export default Component;
