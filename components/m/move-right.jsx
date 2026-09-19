import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxuy4172b.css';
import '../../css/l/l9tx6kbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="gxuy4172b"/><path class="l9tx6kbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:move-right"} {...others} />);
}

export default Component;
