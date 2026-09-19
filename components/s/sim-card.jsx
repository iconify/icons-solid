import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6vt25bsd.css';
import '../../css/r/rfkvs9bdx.css';
import '../../css/l/l_2ml6bep.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g6vt25bsd"/><circle class="rfkvs9bdx"/><rect class="l_2ml6bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sim-card"} {...others} />);
}

export default Component;
