import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgd6yb9-y.css';
import '../../css/w/wazow3b1r.css';
import '../../css/s/s89r_abgl.css';
import '../../css/p/ptfkqx5cc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rgd6yb9-y"/><rect class="wazow3b1r"/><rect class="s89r_abgl"/><path class="ptfkqx5cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:projector-one"} {...others} />);
}

export default Component;
