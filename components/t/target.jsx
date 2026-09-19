import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n0wet7blz.css';
import '../../css/n/nezm72bmx.css';
import '../../css/e/euz7ffb6m.css';
import '../../css/w/wvc0fkyxx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n0wet7blz"/><path class="nezm72bmx"/><path class="euz7ffb6m"/><path class="wvc0fkyxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:target"} {...others} />);
}

export default Component;
