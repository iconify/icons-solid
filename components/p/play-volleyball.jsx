import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggc5c-1wb.css';
import '../../css/b/bgrw82b0m.css';
import '../../css/w/waj9yrbya.css';
import '../../css/b/bgvt5lblx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ggc5c-1wb"/><path class="bgrw82b0m"/><path class="waj9yrbya"/><path class="bgvt5lblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:play-volleyball"} {...others} />);
}

export default Component;
