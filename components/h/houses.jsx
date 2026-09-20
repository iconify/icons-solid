import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8dwktc0i.css';
import '../../css/q/qkzndobnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r8dwktc0i"/><path class="qkzndobnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:houses"} {...others} />);
}

export default Component;
