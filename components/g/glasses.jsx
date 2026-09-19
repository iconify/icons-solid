import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c1_19k84o.css';
import '../../css/j/jxe3ceblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c1_19k84o"/><path class="jxe3ceblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:glasses"} {...others} />);
}

export default Component;
