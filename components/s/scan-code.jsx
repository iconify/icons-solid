import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r_ktmtjwe.css';
import '../../css/o/o51cz7q6l.css';
import '../../css/u/uj-tbwz8n.css';
import '../../css/h/hf8fe3d2n.css';
import '../../css/e/efkqgnb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r_ktmtjwe"/><path class="o51cz7q6l"/><path class="uj-tbwz8n"/><path class="hf8fe3d2n"/><path class="efkqgnb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scan-code"} {...others} />);
}

export default Component;
