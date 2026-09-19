import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcnvx6b2i.css';
import '../../css/l/lc2bhi9-j.css';
import '../../css/r/rfdykoh2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zcnvx6b2i"/><path clip-rule="evenodd" class="lc2bhi9-j"/><path class="rfdykoh2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:death-outline-24px"} {...others} />);
}

export default Component;
