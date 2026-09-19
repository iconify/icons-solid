import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/l/lpiigccei.css';
import '../../css/a/an__txbhx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="y0r_bqb0y"/><path class="lpiigccei"/><path class="an__txbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:agreement"} {...others} />);
}

export default Component;
