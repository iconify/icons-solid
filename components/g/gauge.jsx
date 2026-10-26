import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dxtrl7bap.css';
import '../../css/o/oiux9v30g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="dxtrl7bap"/><path class="oiux9v30g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:gauge"} {...others} />);
}

export default Component;
