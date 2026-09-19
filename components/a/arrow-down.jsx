import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zw9x8zb7y.css';
import '../../css/g/gicbit57r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zw9x8zb7y"/><path class="gicbit57r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-down"} {...others} />);
}

export default Component;
