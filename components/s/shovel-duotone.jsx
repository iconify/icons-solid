import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd-spsilb.css';
import '../../css/o/od6cmr_8o.css';
import '../../css/v/vp7gs9big.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jd-spsilb"/><path class="od6cmr_8o"/><path class="vp7gs9big"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shovel-duotone"} {...others} />);
}

export default Component;
