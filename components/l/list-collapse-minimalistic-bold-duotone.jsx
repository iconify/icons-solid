import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/o7greeb4r.css';
import '../../css/p/pgsx8ub-o.css';
import '../../css/z/zngrk6exs.css';
import '../../css/p/pzpvoobvy.css';
import '../../css/b/bkakadf3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="o7greeb4r"/><path class="pgsx8ub-o"/><path class="zngrk6exs"/></g><path class="pzpvoobvy"/><path class="bkakadf3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
