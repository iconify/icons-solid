import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/c/cmydvqi2y.css';
import '../../css/i/ihda4dbip.css';
import '../../css/j/jmnh04bvk.css';
import '../../css/m/mtpte8bfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="cmydvqi2y"/><path class="ihda4dbip"/><path class="jmnh04bvk"/><path class="mtpte8bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:acceleration"} {...others} />);
}

export default Component;
