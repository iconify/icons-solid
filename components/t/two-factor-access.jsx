import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iopy05bgv.css';
import '../../css/z/zuilzvben.css';
import '../../css/r/rqvtl8brz.css';
import '../../css/s/sf-p1-qpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iopy05bgv"/><path class="zuilzvben"/><path class="rqvtl8brz"/><path class="sf-p1-qpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:two-factor-access"} {...others} />);
}

export default Component;
