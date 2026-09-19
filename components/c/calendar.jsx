import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kieqtykkv.css';
import '../../css/w/w723mibye.css';
import '../../css/v/vio2kzbrd.css';

const viewBox = {"width":34,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kieqtykkv"/><path class="w723mibye"/><path class="vio2kzbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:calendar"} {...others} />);
}

export default Component;
