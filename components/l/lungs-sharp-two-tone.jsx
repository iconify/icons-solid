import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/edgm8ib5o.css';
import '../../css/m/ms96mmb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="edgm8ib5o"/><path class="ms96mmb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:lungs-sharp-two-tone"} {...others} />);
}

export default Component;
