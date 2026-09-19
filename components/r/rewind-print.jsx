import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/pvvdzwnfo.css';
import '../../css/v/vurxrlbvp.css';
import '../../css/p/puhfr9buo.css';
import '../../css/v/vi-anvyiq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="pvvdzwnfo"/><path class="vurxrlbvp"/></g><path clip-rule="evenodd" class="puhfr9buo"/><path clip-rule="evenodd" class="vi-anvyiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:rewind-print"} {...others} />);
}

export default Component;
