import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d2amodb3h.css';
import '../../css/l/l7mujbi0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d2amodb3h"/><path class="l7mujbi0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stone"} {...others} />);
}

export default Component;
