import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o30ctab0j.css';
import '../../css/t/th_2fsb0e.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o30ctab0j"/><path class="th_2fsb0e"/><path class="d-a_qsb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:radar-sharp-duotone"} {...others} />);
}

export default Component;
