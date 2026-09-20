import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7mdf21il.css';
import '../../css/l/l-jjes81x.css';
import '../../css/u/u__z-cjnu.css';
import '../../css/e/en4j_7b0z.css';
import '../../css/x/xfhw4fn_s.css';
import '../../css/h/h47g6kz-a.css';
import '../../css/r/r_3_s_o8v.css';
import '../../css/g/g3u5f69rb.css';
import '../../css/n/n2qx3jzpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l7mdf21il"/><path class="l-jjes81x"/><path class="u__z-cjnu"/><path class="en4j_7b0z"/><path class="xfhw4fn_s"/><path class="h47g6kz-a"/><path class="r_3_s_o8v"/><path class="g3u5f69rb"/><path class="n2qx3jzpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:coffee-cold"} {...others} />);
}

export default Component;
