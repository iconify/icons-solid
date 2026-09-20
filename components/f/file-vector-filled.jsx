import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sim8cfb2a.css';
import '../../css/r/rjkl0yiqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sim8cfb2a"/><path class="rjkl0yiqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-vector-filled"} {...others} />);
}

export default Component;
