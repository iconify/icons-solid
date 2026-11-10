import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytls-t4ur.css';
import '../../css/h/hsqu3-bct.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/w/wr0j6ebrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ytls-t4ur"/><path class="hsqu3-bct"/><path class="xtyg9db9j"/><path class="wr0j6ebrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-sparkle"} {...others} />);
}

export default Component;
