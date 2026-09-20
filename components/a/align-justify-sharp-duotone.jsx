import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c8ot_ib-j.css';
import '../../css/w/w_ndfabta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="c8ot_ib-j"/><path class="w_ndfabta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-justify-sharp-duotone"} {...others} />);
}

export default Component;
