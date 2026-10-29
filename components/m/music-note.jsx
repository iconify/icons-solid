import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upb7d1bmh.css';
import '../../css/t/tcfxd5b4z.css';
import '../../css/p/p255o5clp.css';
import '../../css/v/vu_upsb8y.css';
import '../../css/d/d0jvsobnt.css';
import '../../css/o/o7e9rvtpm.css';
import '../../css/o/o09s2ekdv.css';
import '../../css/s/srnp1633c.css';
import '../../css/a/ad_4-nb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="upb7d1bmh wm-shadow"/><path class="tcfxd5b4z wm-shadow"/><path class="p255o5clp"/><path class="vu_upsb8y"/><path class="d0jvsobnt"/><path class="o7e9rvtpm"/><path class="o09s2ekdv wm-shine"/><path class="srnp1633c wm-shine"/><path class="ad_4-nb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:music-note"} {...others} />);
}

export default Component;
