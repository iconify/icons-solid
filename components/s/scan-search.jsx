import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vxylnho2m.css';
import '../../css/g/gfzvgmbfw.css';
import '../../css/y/yafphdbvs.css';
import '../../css/o/otizgkbvu.css';
import '../../css/p/p-gy_rz7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="vxylnho2m"/><path class="gfzvgmbfw wm-a"/><path class="wm-shine yafphdbvs"/><path class="otizgkbvu wm-shine"/><path class="p-gy_rz7w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:scan-search"} {...others} />);
}

export default Component;
