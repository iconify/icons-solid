import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uniixcfaj.css';
import '../../css/j/jfon4t8dz.css';
import '../../css/s/sxde_bcdx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uniixcfaj"/><path class="jfon4t8dz"/><path class="sxde_bcdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:phone-rotate-mobile"} {...others} />);
}

export default Component;
