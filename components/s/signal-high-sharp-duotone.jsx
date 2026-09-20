import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fbjr9qbyh.css';
import '../../css/e/eal1dfbmd.css';
import '../../css/l/lj14h_baz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fbjr9qbyh"/><path class="eal1dfbmd"/><path class="lj14h_baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-high-sharp-duotone"} {...others} />);
}

export default Component;
