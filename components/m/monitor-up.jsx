import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mgnko65zx.css';
import '../../css/r/r8-cjywgb.css';
import '../../css/h/h7focp4gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mgnko65zx"/><rect class="r8-cjywgb"/><path class="h7focp4gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-up"} {...others} />);
}

export default Component;
