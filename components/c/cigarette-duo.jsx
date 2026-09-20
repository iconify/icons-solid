import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/v/v5ccan78b.css';
import '../../css/u/udd6z_bpp.css';
import '../../css/m/mng7bdcmm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="v5ccan78b"/><path class="udd6z_bpp"/><path class="mng7bdcmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cigarette-duo"} {...others} />);
}

export default Component;
