import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c23hjf9vn.css';
import '../../css/z/z_gk1_m8o.css';
import '../../css/y/yq0t3ucke.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c23hjf9vn"/><path class="z_gk1_m8o"/><path class="yq0t3ucke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:skull"} {...others} />);
}

export default Component;
