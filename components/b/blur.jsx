import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7xa9sbtx.css';
import '../../css/v/voorfjv1s.css';
import '../../css/l/l8hkuabxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c7xa9sbtx"/><path class="voorfjv1s"/><path class="l8hkuabxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blur"} {...others} />);
}

export default Component;
