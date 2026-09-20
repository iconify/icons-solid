import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/e/etu8deb5s.css';
import '../../css/j/joyk_zv2b.css';
import '../../css/b/bt_0wb51z.css';
import '../../css/s/sox7v0lig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="etu8deb5s"/><path class="joyk_zv2b"/><path class="bt_0wb51z"/><path class="sox7v0lig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-2-bold-duotone"} {...others} />);
}

export default Component;
