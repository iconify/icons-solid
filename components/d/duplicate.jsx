import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/q/q6vzj7b7q.css';
import '../../css/m/mg4c9fbzu.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="q6vzj7b7q"/><path class="mg4c9fbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:duplicate"} {...others} />);
}

export default Component;
