import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uws2gcfef.css';
import '../../css/n/n82p4-bjz.css';
import '../../css/s/smv74pb2k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uws2gcfef"/><path class="n82p4-bjz"/><path class="smv74pb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:potted-plant"} {...others} />);
}

export default Component;
