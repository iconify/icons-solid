import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bb_adyb-m.css';
import '../../css/a/aaz-7qwfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bb_adyb-m"/><path class="aaz-7qwfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-03"} {...others} />);
}

export default Component;
