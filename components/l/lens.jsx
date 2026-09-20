import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/di28f0bkm.css';
import '../../css/a/aagox6bvo.css';
import '../../css/u/uzihh4l-n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="di28f0bkm"/><path class="aagox6bvo"/><path class="uzihh4l-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lens"} {...others} />);
}

export default Component;
