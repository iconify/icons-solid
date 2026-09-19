import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hf8y7jbvt.css';
import '../../css/f/fh-d-swvt.css';
import '../../css/r/r8sdp5bdc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hf8y7jbvt"/><path clip-rule="evenodd" class="fh-d-swvt"/><path class="r8sdp5bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:syphilis-alt"} {...others} />);
}

export default Component;
