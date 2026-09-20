import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/z/z30hp2b8b.css';
import '../../css/h/h54pu9kvv.css';
import '../../css/v/vdz_6ebrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="z30hp2b8b"/><path class="h54pu9kvv"/><path class="vdz_6ebrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-broadcast-tower"} {...others} />);
}

export default Component;
