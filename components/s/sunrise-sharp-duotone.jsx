import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e7-h1bcnv.css';
import '../../css/v/vipruc3fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e7-h1bcnv"/><path class="vipruc3fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sunrise-sharp-duotone"} {...others} />);
}

export default Component;
