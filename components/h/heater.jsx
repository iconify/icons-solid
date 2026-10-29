import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ex-6rrbdg.css';
import '../../css/l/lroa9eb4n.css';
import '../../css/s/sbkoykbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ex-6rrbdg wm-k"/><path class="lroa9eb4n"/><path class="sbkoykbeq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heater"} {...others} />);
}

export default Component;
