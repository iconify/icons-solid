import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w--axpa3h.css';
import '../../css/z/zcvl_djfq.css';
import '../../css/n/nb5t14bvr.css';
import '../../css/g/gnz_7xmuq.css';
import '../../css/e/ese591b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w--axpa3h"/><path class="zcvl_djfq"/><path class="nb5t14bvr"/><path class="gnz_7xmuq"/><path class="ese591b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scale-3d-duotone"} {...others} />);
}

export default Component;
