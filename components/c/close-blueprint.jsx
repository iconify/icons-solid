import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lb34b3syz.css';
import '../../css/h/hjfiyp-px.css';
import '../../css/h/hrjatl9nv.css';
import '../../css/c/cp-zj9t8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lb34b3syz wm-deco"/><path class="hjfiyp-px wm-deco"/><path class="hrjatl9nv"/><path class="cp-zj9t8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:close-blueprint"} {...others} />);
}

export default Component;
