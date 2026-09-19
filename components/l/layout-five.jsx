import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/a/am1igebwo.css';
import '../../css/y/yeo6-kifb.css';
import '../../css/u/uhonf02fx.css';
import '../../css/g/gb_3jacwk.css';
import '../../css/e/eefzbbcxl.css';
import '../../css/g/gajs57tcq.css';
import '../../css/y/yisbtgj1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="am1igebwo"/><path class="yeo6-kifb"/><path class="uhonf02fx"/><path class="gb_3jacwk"/><path class="eefzbbcxl"/><path class="gajs57tcq"/><path class="yisbtgj1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:layout-five"} {...others} />);
}

export default Component;
