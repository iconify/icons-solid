import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxa9npbvu.css';
import '../../css/k/kl8-trqza.css';
import '../../css/x/xdw_ihbgr.css';
import '../../css/t/t_xr9_bii.css';
import '../../css/y/y045j_b3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pxa9npbvu"/><path class="kl8-trqza"/><path class="xdw_ihbgr"/><path class="t_xr9_bii"/><path class="y045j_b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:instagram"} {...others} />);
}

export default Component;
