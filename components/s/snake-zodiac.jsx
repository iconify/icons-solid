import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m3ts_9bhm.css';
import '../../css/j/j2irmjbol.css';
import '../../css/b/bwcra3bfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="m3ts_9bhm"/><path class="j2irmjbol"/><path class="bwcra3bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:snake-zodiac"} {...others} />);
}

export default Component;
