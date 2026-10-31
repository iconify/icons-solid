import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/m/ml2lq6y_v.css';
import '../../css/l/lg-8n1num.css';
import '../../css/o/oijoyrt4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="ml2lq6y_v wm-shine"/><path class="lg-8n1num wm-k"/><path class="oijoyrt4u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:columns-3"} {...others} />);
}

export default Component;
