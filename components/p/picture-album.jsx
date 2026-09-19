import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/aythmyq9y.css';
import '../../css/k/kv_hcvb_d.css';
import '../../css/h/h6zb2ac6o.css';
import '../../css/y/yt05gfblf.css';
import '../../css/h/hp8yphbba.css';
import '../../css/w/wy8doubpa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="aythmyq9y"/><path class="kv_hcvb_d"/><path class="h6zb2ac6o"/><path class="yt05gfblf"/><path class="hp8yphbba"/><path class="wy8doubpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:picture-album"} {...others} />);
}

export default Component;
