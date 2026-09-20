import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/c/cc3fu5btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zu7ckv_si"/><path class="cc3fu5btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-x-sharp-duotone"} {...others} />);
}

export default Component;
