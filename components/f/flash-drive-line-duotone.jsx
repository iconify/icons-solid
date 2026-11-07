import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wy6juxypy.css';
import '../../css/n/nerkymkii.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/x/xrl1iyx7n.css';
import '../../css/v/v_guwch_g.css';
import '../../css/g/gluf0itsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wy6juxypy"/><path class="nerkymkii"/><path class="fyr67fbfm"/><path class="xrl1iyx7n"/><path class="v_guwch_g"/><path class="gluf0itsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-line-duotone"} {...others} />);
}

export default Component;
