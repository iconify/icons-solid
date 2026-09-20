import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n77s3abja.css';
import '../../css/t/t11kj5rgv.css';
import '../../css/z/zbfc7cbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="n77s3abja"/><path class="t11kj5rgv"/><path class="zbfc7cbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-2-boy-sharp-duotone"} {...others} />);
}

export default Component;
