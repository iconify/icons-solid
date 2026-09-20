import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ronc_phlw.css';
import '../../css/r/r7o52sv7c.css';
import '../../css/u/uzz_d-3jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ronc_phlw"/><path clip-rule="evenodd" class="r7o52sv7c"/><path clip-rule="evenodd" class="uzz_d-3jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-2-outline"} {...others} />);
}

export default Component;
