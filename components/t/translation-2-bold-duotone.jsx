import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpuuhxylu.css';
import '../../css/h/h_tskvb-r.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/x30gl9r7w.css';
import '../../css/d/dntco1pnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mpuuhxylu"/><path class="h_tskvb-r"/><g class="mc2zb0bvp"><path class="x30gl9r7w"/><path class="dntco1pnf"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-bold-duotone"} {...others} />);
}

export default Component;
