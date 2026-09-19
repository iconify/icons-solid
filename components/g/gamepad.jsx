import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w44eh704i.css';
import '../../css/e/es51-ybzb.css';
import '../../css/d/dl-d09bou.css';
import '../../css/c/c_cphdcwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="w44eh704i"/><circle class="es51-ybzb"/><circle class="dl-d09bou"/><path class="c_cphdcwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gamepad"} {...others} />);
}

export default Component;
