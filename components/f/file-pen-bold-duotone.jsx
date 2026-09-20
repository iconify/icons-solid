import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-vlo5b_t.css';
import '../../css/l/lep000y9n.css';
import '../../css/o/o7xiam4yp.css';
import '../../css/t/tdo-pnbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o-vlo5b_t"/><path class="lep000y9n"/><path class="o7xiam4yp"/><path class="tdo-pnbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-pen-bold-duotone"} {...others} />);
}

export default Component;
