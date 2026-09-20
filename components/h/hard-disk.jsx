import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtlwucb4x.css';
import '../../css/q/q5at-vddn.css';
import '../../css/x/x1c395rcg.css';
import '../../css/g/g1j7d-50j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wtlwucb4x"/><path class="q5at-vddn"/><path class="x1c395rcg"/><path class="g1j7d-50j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hard-disk"} {...others} />);
}

export default Component;
