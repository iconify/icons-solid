import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ra0vxpf9f.css';
import '../../css/j/joz_vvjya.css';
import '../../css/p/pb8-3nbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ra0vxpf9f"/><path class="joz_vvjya"/><path class="pb8-3nbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-plus-duotone"} {...others} />);
}

export default Component;
