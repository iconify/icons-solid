import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dfhxl3bul.css';
import '../../css/i/i8_bb3v3y.css';
import '../../css/q/qecnp8b3h.css';
import '../../css/n/n3e2yg9cn.css';
import '../../css/x/xtottzbff.css';
import '../../css/d/diqaq-b7d.css';
import '../../css/h/h33ki6url.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="dfhxl3bul"/><path class="i8_bb3v3y"/><path class="qecnp8b3h"/><rect class="n3e2yg9cn"/><rect class="xtottzbff"/><path class="diqaq-b7d"/><path class="h33ki6url"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reel"} {...others} />);
}

export default Component;
