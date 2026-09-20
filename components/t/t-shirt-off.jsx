import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5kx_zt5a.css';
import '../../css/d/df_1v7hrx.css';
import '../../css/v/ve5uof6vp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="m5kx_zt5a"/><path clip-rule="evenodd" class="df_1v7hrx"/><path class="ve5uof6vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:t-shirt-off"} {...others} />);
}

export default Component;
