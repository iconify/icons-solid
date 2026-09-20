import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5i80px5i.css';
import '../../css/z/zz7_a5b0z.css';
import '../../css/u/uda2ebbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q5i80px5i"/><path class="zz7_a5b0z"/><path class="uda2ebbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:critical-thinking-2"} {...others} />);
}

export default Component;
