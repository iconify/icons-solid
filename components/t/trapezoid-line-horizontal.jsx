import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d5pdy5bnz.css';
import '../../css/l/l-t8ute4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d5pdy5bnz"/><path class="l-t8ute4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trapezoid-line-horizontal"} {...others} />);
}

export default Component;
