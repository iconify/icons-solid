import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vuc32ac1y.css';
import '../../css/l/luspzab5n.css';
import '../../css/l/ldm5tkdqi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="vuc32ac1y"/><path class="luspzab5n"/><path class="ldm5tkdqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-wrap-truncation"} {...others} />);
}

export default Component;
