import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykw5rkkzn.css';
import '../../css/l/ljm19-21z.css';
import '../../css/n/np_ofpb_c.css';
import '../../css/h/hkcbm141j.css';
import '../../css/n/npuypub5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ykw5rkkzn"/><path class="ljm19-21z"/><path class="np_ofpb_c"/><path clip-rule="evenodd" class="hkcbm141j"/><path clip-rule="evenodd" class="npuypub5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-bold-duotone"} {...others} />);
}

export default Component;
