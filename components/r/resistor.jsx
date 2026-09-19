import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/szr5fvutm.css';
import '../../css/i/i3yq3qbys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="szr5fvutm"/><path class="i3yq3qbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:resistor"} {...others} />);
}

export default Component;
