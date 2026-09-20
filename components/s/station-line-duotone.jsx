import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aq9vwpvuv.css';
import '../../css/m/mml9srb2o.css';
import '../../css/u/um_27sbup.css';
import '../../css/e/e_c-iubxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aq9vwpvuv"/><path class="mml9srb2o"/><circle class="um_27sbup"/><path class="e_c-iubxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-line-duotone"} {...others} />);
}

export default Component;
