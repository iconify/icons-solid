import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p44o5vfir.css';
import '../../css/q/qeand74hw.css';
import '../../css/b/b-dm5ac4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="p44o5vfir"/><path class="qeand74hw"/><path class="b-dm5ac4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chest"} {...others} />);
}

export default Component;
