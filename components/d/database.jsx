import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/o3-avfb1e.css';
import '../../css/b/by617sf0f.css';
import '../../css/b/brdpamb6t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="o3-avfb1e"/><path class="by617sf0f"/><path class="brdpamb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:database"} {...others} />);
}

export default Component;
