import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o9f4k62_x.css';
import '../../css/k/kr74dfsjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o9f4k62_x"/><path class="kr74dfsjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-cw-square"} {...others} />);
}

export default Component;
