import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl9_mob0i.css';
import '../../css/n/nr49yeblg.css';
import '../../css/l/lrqda5b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hl9_mob0i"/><path clip-rule="evenodd" class="nr49yeblg"/><path class="lrqda5b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plus-minus-bold-duotone"} {...others} />);
}

export default Component;
