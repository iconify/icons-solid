import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nexjs-q2y.css';
import '../../css/a/azvjj3f1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nexjs-q2y"/><path class="azvjj3f1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:corner-left-down"} {...others} />);
}

export default Component;
