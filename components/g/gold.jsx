import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tatkx4b6m.css';
import '../../css/b/bopstub_u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tatkx4b6m"/><path class="bopstub_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gold"} {...others} />);
}

export default Component;
