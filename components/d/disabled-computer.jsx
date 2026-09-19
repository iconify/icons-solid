import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sktjwobeu.css';
import '../../css/d/dwm4owi0d.css';
import '../../css/y/yl2fcsb_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="sktjwobeu"/><circle class="dwm4owi0d"/><path class="yl2fcsb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:disabled-computer"} {...others} />);
}

export default Component;
