import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jef8rhbsn.css';
import '../../css/b/bu7no646v.css';
import '../../css/c/cukpe2bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jef8rhbsn"/><path class="bu7no646v"/><path class="cukpe2bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-line-sharp-duotone"} {...others} />);
}

export default Component;
