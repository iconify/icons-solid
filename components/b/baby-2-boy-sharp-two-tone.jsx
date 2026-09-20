import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zg157qnlc.css';
import '../../css/a/a802rdadf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zg157qnlc"/><path class="a802rdadf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-2-boy-sharp-two-tone"} {...others} />);
}

export default Component;
