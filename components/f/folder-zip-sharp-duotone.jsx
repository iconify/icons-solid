import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tg2bgx4fn.css';
import '../../css/h/h4jyjhtzw.css';
import '../../css/k/k2y5uhb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="tg2bgx4fn"/><path class="h4jyjhtzw"/><path class="k2y5uhb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-zip-sharp-duotone"} {...others} />);
}

export default Component;
