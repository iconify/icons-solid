import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7focp4gr.css';
import '../../css/r/r8-cjywgb.css';
import '../../css/m/mpq6rb0rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h7focp4gr"/><rect class="r8-cjywgb"/><rect class="mpq6rb0rh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-stop"} {...others} />);
}

export default Component;
