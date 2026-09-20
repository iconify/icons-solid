import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-srkbcuc.css';
import '../../css/t/te37o_dxs.css';
import '../../css/r/ribhzvbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-srkbcuc"/><path class="te37o_dxs"/><path class="ribhzvbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-out-line-duotone"} {...others} />);
}

export default Component;
