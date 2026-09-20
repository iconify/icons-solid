import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byfhn9bmy.css';
import '../../css/c/cvy_vhbpu.css';
import '../../css/a/ap0g6hclu.css';
import '../../css/a/ax25lkl5z.css';
import '../../css/z/zeosoac1b.css';
import '../../css/y/yijvuccmn.css';
import '../../css/a/a2qxobchg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="byfhn9bmy"/><path clip-rule="evenodd" class="cvy_vhbpu"/><path class="ap0g6hclu"/><path class="ax25lkl5z"/><path class="zeosoac1b"/><path class="yijvuccmn"/><path class="a2qxobchg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-2-bold-duotone"} {...others} />);
}

export default Component;
