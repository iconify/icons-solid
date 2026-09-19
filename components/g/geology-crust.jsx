import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/voorfjv1s.css';
import '../../css/w/websu8mzr.css';
import '../../css/p/p-vpx1uhj.css';
import '../../css/u/u94sn0bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="voorfjv1s"/><path class="websu8mzr"/><path class="p-vpx1uhj"/><path class="u94sn0bon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:geology-crust"} {...others} />);
}

export default Component;
