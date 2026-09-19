import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r-i1p99qp.css';
import '../../css/r/ry_lfzbyk.css';
import '../../css/a/atu28abtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r-i1p99qp"/><path class="ry_lfzbyk"/><path class="atu28abtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:translation"} {...others} />);
}

export default Component;
