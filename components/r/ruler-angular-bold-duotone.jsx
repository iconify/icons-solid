import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fvyphl0hx.css';
import '../../css/c/c1qf967to.css';
import '../../css/q/q7z-kq8dv.css';
import '../../css/d/d1wftd24y.css';
import '../../css/c/cb6rjbbbd.css';
import '../../css/o/ozw5vq_ig.css';
import '../../css/l/llznifbvu.css';
import '../../css/s/s6f_pob3f.css';
import '../../css/e/ezsudhb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fvyphl0hx"/><path class="c1qf967to"/><path class="q7z-kq8dv"/><path class="d1wftd24y"/><path class="cb6rjbbbd"/><path class="ozw5vq_ig"/><path class="llznifbvu"/><path class="s6f_pob3f"/><path class="ezsudhb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-angular-bold-duotone"} {...others} />);
}

export default Component;
