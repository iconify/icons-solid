import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqd-51b3s.css';
import '../../css/p/ppr3qgb7f.css';
import '../../css/r/r8etlgiam.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="yqd-51b3s"/><path class="ppr3qgb7f"/><path class="r8etlgiam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:fr"} {...others} />);
}

export default Component;
