import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_mwqbchi.css';
import '../../css/r/r5uwyerpu.css';
import '../../css/v/v26sqeg4w.css';
import '../../css/v/vxdit-blj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z_mwqbchi"/><path class="r5uwyerpu"/><path class="v26sqeg4w"/><path class="vxdit-blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wrench-hand"} {...others} />);
}

export default Component;
