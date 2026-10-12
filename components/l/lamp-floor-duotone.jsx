import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_keqv53f.css';
import '../../css/v/vtoil4byv.css';
import '../../css/h/heslusqmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e_keqv53f"/><path class="vtoil4byv"/><path class="heslusqmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-floor-duotone"} {...others} />);
}

export default Component;
