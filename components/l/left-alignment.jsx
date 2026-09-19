import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zta2u8b6n.css';
import '../../css/w/w5agp-bwy.css';
import '../../css/e/evfg-fbgm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zta2u8b6n"/><path class="w5agp-bwy"/><path class="evfg-fbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:left-alignment"} {...others} />);
}

export default Component;
