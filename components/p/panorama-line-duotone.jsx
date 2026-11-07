import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/ft-nr84oc.css';
import '../../css/z/zia4plbis.css';
import '../../css/x/xbt_tmtte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ft-nr84oc"/><path class="zia4plbis"/><path class="xbt_tmtte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panorama-line-duotone"} {...others} />);
}

export default Component;
