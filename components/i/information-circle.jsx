import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2bc8ac_f.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir24z0ugd.css';
import '../../css/o/opo_-vbmk.css';
import '../../css/h/h6fy_i47l.css';
import '../../css/b/bc6nbcc1x.css';
import '../../css/g/gxym--b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGA9GA4JbJ" width="22" height="22" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="s2bc8ac_f"/></mask><g mask="url(#SVGA9GA4JbJ)" class="ft5dv1b6b"><path class="ir24z0ugd"/><path class="opo_-vbmk"/><path class="h6fy_i47l"/><path class="bc6nbcc1x"/><path class="gxym--b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:information-circle"} {...others} />);
}

export default Component;
