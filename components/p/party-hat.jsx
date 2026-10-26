import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p2vkxfrvz.css';
import '../../css/m/m-kcqjbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="p2vkxfrvz"/><path class="m-kcqjbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:party-hat"} {...others} />);
}

export default Component;
