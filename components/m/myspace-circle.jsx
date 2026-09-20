import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oasgoj2dk.css';
import '../../css/u/uf9v5dfhb.css';
import '../../css/o/o1vr-2ost.css';
import '../../css/x/x3ibz2bfz.css';
import '../../css/x/xojntycxm.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="oasgoj2dk"/><ellipse class="uf9v5dfhb"/><path class="o1vr-2ost"/><ellipse class="x3ibz2bfz"/><path class="xojntycxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:myspace-circle"} {...others} />);
}

export default Component;
