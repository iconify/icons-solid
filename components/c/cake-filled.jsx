import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/juuueeb2w.css';
import '../../css/t/t46wqttie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="juuueeb2w"/><path class="t46wqttie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cake-filled"} {...others} />);
}

export default Component;
