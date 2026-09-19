import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eawz4rb0j.css';
import '../../css/y/y_x5j132q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eawz4rb0j"/><path class="y_x5j132q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:double-right"} {...others} />);
}

export default Component;
