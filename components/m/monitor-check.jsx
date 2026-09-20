import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zor11obzi.css';
import '../../css/r/r8-cjywgb.css';
import '../../css/h/h7focp4gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zor11obzi"/><rect class="r8-cjywgb"/><path class="h7focp4gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-check"} {...others} />);
}

export default Component;
