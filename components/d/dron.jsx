import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpj-0xbka.css';
import '../../css/u/urf6_jb3f.css';
import '../../css/m/mhq-sxz_r.css';
import '../../css/r/ruwe7ac_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rpj-0xbka"/><rect transform="matrix(0 -1 -1 0 14.7 17.37)" class="urf6_jb3f"/><rect transform="matrix(0 -1 -1 0 14.7 17.37)" class="mhq-sxz_r"/><path class="ruwe7ac_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dron"} {...others} />);
}

export default Component;
