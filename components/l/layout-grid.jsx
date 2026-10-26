import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/d19mzcbcn.css';
import '../../css/v/vna8tlk8w.css';
import '../../css/m/mc9n3acio.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="d19mzcbcn"/><path class="vna8tlk8w"/><path class="mc9n3acio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:layout-grid"} {...others} />);
}

export default Component;
