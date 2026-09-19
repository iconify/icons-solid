import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5qhce_5u.css';
import '../../css/h/hiqoehyvg.css';
import '../../css/w/wxit8d4zv.css';
import '../../css/r/rs84ae6xb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h5qhce_5u"/><path clip-rule="evenodd" class="hiqoehyvg"/><path class="wxit8d4zv"/><path class="rs84ae6xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:save"} {...others} />);
}

export default Component;
