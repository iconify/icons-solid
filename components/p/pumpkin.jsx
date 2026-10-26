import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iajb63bgy.css';
import '../../css/d/dvfzo382l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="iajb63bgy"/><path class="dvfzo382l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pumpkin"} {...others} />);
}

export default Component;
