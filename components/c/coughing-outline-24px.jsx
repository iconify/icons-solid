import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ai2w0-bae.css';
import '../../css/e/egr1ps-7z.css';
import '../../css/g/g38ojablm.css';
import '../../css/c/cd2dae1lh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ai2w0-bae"/><path class="egr1ps-7z"/><path clip-rule="evenodd" class="g38ojablm"/><path class="cd2dae1lh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:coughing-outline-24px"} {...others} />);
}

export default Component;
