import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnq40vbzs.css';
import '../../css/g/gxlwordvq.css';
import '../../css/p/pihw0xj_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lnq40vbzs"/><path class="gxlwordvq"/><path class="pihw0xj_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hotel-duotone"} {...others} />);
}

export default Component;
