import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnt97vblj.css';
import '../../css/s/sttdwq4fh.css';
import '../../css/e/ee7yz0sic.css';
import '../../css/w/wkk2wqcxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rnt97vblj"/><path class="sttdwq4fh"/><path class="ee7yz0sic"/><path class="wkk2wqcxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-line-duotone"} {...others} />);
}

export default Component;
