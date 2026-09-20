import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqqd4b0vl.css';
import '../../css/q/qak8nzb_y.css';
import '../../css/s/s8fo7sise.css';
import '../../css/t/tqhaaztfb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tqqd4b0vl"/><path class="qak8nzb_y"/><path class="s8fo7sise"/><path class="tqhaaztfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ai-chip-robot"} {...others} />);
}

export default Component;
