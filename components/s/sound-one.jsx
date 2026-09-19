import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb8gueynh.css';
import '../../css/b/b152mp-tb.css';
import '../../css/n/n0b9q-beb.css';
import '../../css/r/rupa0yw7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="sb8gueynh"/><path class="b152mp-tb"/><rect class="n0b9q-beb"/><path class="rupa0yw7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sound-one"} {...others} />);
}

export default Component;
