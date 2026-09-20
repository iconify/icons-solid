import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfp2dgaak.css';
import '../../css/h/hgfwx2b8f.css';
import '../../css/u/uozhh8dnt.css';
import '../../css/k/k9bc-5irn.css';
import '../../css/x/xmx218b8k.css';
import '../../css/y/yh5zoxbug.css';
import '../../css/c/cq0dt1ruy.css';
import '../../css/d/dz46wpfpr.css';
import '../../css/n/n-gd_bbsi.css';
import '../../css/u/u2x7_7bdy.css';
import '../../css/d/dmqwn2swl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sfp2dgaak"/><path class="hgfwx2b8f"/><path class="uozhh8dnt"/><path class="k9bc-5irn"/><path class="xmx218b8k"/><path class="yh5zoxbug"/><path class="cq0dt1ruy"/><path class="dz46wpfpr"/><path class="n-gd_bbsi"/><path class="u2x7_7bdy"/><path class="dmqwn2swl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:juld"} {...others} />);
}

export default Component;
