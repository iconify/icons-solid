import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/f/f_1rd_bme.css';
import '../../css/e/es56i3buc.css';
import '../../css/u/uc9bw1bea.css';
import '../../css/o/o613cobci.css';
import '../../css/y/y0ye5bc2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="f_1rd_bme"/><path class="es56i3buc"/><path class="uc9bw1bea"/><path class="o613cobci"/><circle class="y0ye5bc2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:capricornus"} {...others} />);
}

export default Component;
