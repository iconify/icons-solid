import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zb2pnsffz.css';
import '../../css/d/d9t7gkbpm.css';
import '../../css/p/pllnv2f8o.css';
import '../../css/u/u_qt0gbnl.css';
import '../../css/i/iw3i8nb8b.css';
import '../../css/t/tcmb89bxl.css';
import '../../css/r/r81c58q3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zb2pnsffz"/><path class="d9t7gkbpm"/><path class="pllnv2f8o"/><path class="u_qt0gbnl"/><path class="iw3i8nb8b"/><path class="tcmb89bxl"/><path class="r81c58q3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-cross-line-duotone"} {...others} />);
}

export default Component;
