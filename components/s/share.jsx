import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5t6sku_d.css';
import '../../css/x/xala4598m.css';
import '../../css/q/qfrd0lbpx.css';
import '../../css/h/hb--9dbkh.css';
import '../../css/m/m3mpd1bar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x5t6sku_d"/><g class="xala4598m"><circle class="qfrd0lbpx"/><circle class="hb--9dbkh"/><circle class="m3mpd1bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:share"} {...others} />);
}

export default Component;
