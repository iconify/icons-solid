import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpavlsrwc.css';
import '../../css/z/zxg81ybti.css';
import '../../css/b/bie02lkpi.css';
import '../../css/d/dpri-0o_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tpavlsrwc"/><path clip-rule="evenodd" class="zxg81ybti"/><path class="bie02lkpi"/><path class="dpri-0o_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-bold-duotone"} {...others} />);
}

export default Component;
