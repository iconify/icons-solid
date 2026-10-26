import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bmcn0j8tx.css';
import '../../css/k/kwm0wubux.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="bmcn0j8tx"/><path class="kwm0wubux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:arrow-right"} {...others} />);
}

export default Component;
