import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzdlp6bkl.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/l/lj70h7b9m.css';
import '../../css/o/ozbpad-uv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zzdlp6bkl"/><g class="sxsjrzbyv"><path class="lj70h7b9m"/><path class="ozbpad-uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eject-button"} {...others} />);
}

export default Component;
