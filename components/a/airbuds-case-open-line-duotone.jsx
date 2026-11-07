import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k9shapbbb.css';
import '../../css/x/xt416ub-e.css';
import '../../css/u/u56i8ebee.css';
import '../../css/d/d-zzacc2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k9shapbbb"/><path class="xt416ub-e"/><path class="u56i8ebee"/><path class="d-zzacc2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-open-line-duotone"} {...others} />);
}

export default Component;
