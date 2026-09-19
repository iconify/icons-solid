import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ion377t6d.css';
import '../../css/t/tyq17fbmm.css';
import '../../css/v/vn6-di86m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ion377t6d"/><path class="tyq17fbmm"/><path class="vn6-di86m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-check-01"} {...others} />);
}

export default Component;
