import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkr2o4bel.css';
import '../../css/z/zic55xbmx.css';
import '../../css/j/js8wb_-8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wkr2o4bel"/><path class="zic55xbmx"/><path class="js8wb_-8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:drumstick-duotone"} {...others} />);
}

export default Component;
