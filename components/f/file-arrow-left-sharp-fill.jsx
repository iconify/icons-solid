import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/adfmt_bia.css';
import '../../css/r/rdgs7_b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="adfmt_bia"/><path class="rdgs7_b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-arrow-left-sharp-fill"} {...others} />);
}

export default Component;
