import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meo_3-l_k.css';
import '../../css/d/d4tgy6_gn.css';
import '../../css/l/lvwy1yo9v.css';
import '../../css/i/iuph7tb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="meo_3-l_k"/><path class="d4tgy6_gn"/><path class="lvwy1yo9v"/><path class="iuph7tb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:axe"} {...others} />);
}

export default Component;
