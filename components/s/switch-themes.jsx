import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/s/sn96x9otv.css';
import '../../css/t/t-9twgrad.css';
import '../../css/m/mfdkm_-jy.css';
import '../../css/n/n9w1ojbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path clip-rule="evenodd" class="sn96x9otv"/><path class="t-9twgrad"/><path class="mfdkm_-jy"/><path class="n9w1ojbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:switch-themes"} {...others} />);
}

export default Component;
