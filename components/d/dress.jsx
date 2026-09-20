import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkdwilbgy.css';
import '../../css/w/wvnvuybcm.css';
import '../../css/e/ekrg9c_aa.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wkdwilbgy"/><path clip-rule="evenodd" class="wvnvuybcm"/><path class="ekrg9c_aa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:dress"} {...others} />);
}

export default Component;
