import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2zzdt_ir.css';
import '../../css/q/q5yo2eier.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="g2zzdt_ir"/><path class="q5yo2eier"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:music-notes-slash-duotone"} {...others} />);
}

export default Component;
