import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oi26rxbql.css';
import '../../css/q/qqdwl_d7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="oi26rxbql"/><path class="qqdwl_d7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sd-card-outline"} {...others} />);
}

export default Component;
