import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n620nr8wa.css';
import '../../css/l/l1_zlpr0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="n620nr8wa"/><path class="l1_zlpr0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:cherry-blossom"} {...others} />);
}

export default Component;
