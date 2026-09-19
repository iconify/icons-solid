import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkkwo0byg.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/u/us5hpdniu.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="qkkwo0byg"/><path class="vsxun6bmm"/><path class="us5hpdniu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:hu"} {...others} />);
}

export default Component;
