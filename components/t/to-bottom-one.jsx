import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nmobi0p3x.css';
import '../../css/g/gjal2mj8o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nmobi0p3x"/><path class="gjal2mj8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:to-bottom-one"} {...others} />);
}

export default Component;
