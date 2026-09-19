import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/n/nui-bubmy.css';
import '../../css/e/epci27b1y.css';
import '../../css/q/q65_h2pmr.css';
import '../../css/f/fdqcnt6ct.css';
import '../../css/c/c5r8blbmp.css';
import '../../css/f/fl8a10bxd.css';
import '../../css/l/lu1faabac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect transform="rotate(-45 17 24.071)" class="nui-bubmy"/><path class="epci27b1y"/><path class="q65_h2pmr"/><path class="fdqcnt6ct"/><path class="c5r8blbmp"/><path class="fl8a10bxd"/><path class="lu1faabac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:refresh-one"} {...others} />);
}

export default Component;
