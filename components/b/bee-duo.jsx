import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lyjhd5bht.css';
import '../../css/d/d4ba2wp0x.css';
import '../../css/j/j55cyc_ek.css';
import '../../css/g/gg19zmb9y.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/q/qj05ho46r.css';
import '../../css/z/zxfzsfbab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lyjhd5bht"/><path class="d4ba2wp0x"/><path class="j55cyc_ek wm-a"/><path class="gg19zmb9y wm-a"/><path class="d1xkg3smp"/><path class="qj05ho46r"/><path class="wm-a zxfzsfbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bee-duo"} {...others} />);
}

export default Component;
