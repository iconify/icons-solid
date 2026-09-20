import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/e/esjml2b0p.css';
import '../../css/a/al81-g13g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="esjml2b0p"/><path class="al81-g13g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-candlestick-sharp-duotone"} {...others} />);
}

export default Component;
