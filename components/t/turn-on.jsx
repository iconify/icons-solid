import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpvb-o6bq.css';
import '../../css/d/dsi1pmbus.css';
import '../../css/w/waumx2bcm.css';
import '../../css/g/grd4zezfg.css';
import '../../css/w/wgsf-seru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rpvb-o6bq"><path class="dsi1pmbus"/><path class="waumx2bcm"/><path class="grd4zezfg"/><path class="wgsf-seru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:turn-on"} {...others} />);
}

export default Component;
