import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wy8s5efxp.css';
import '../../css/p/pc7966bps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wy8s5efxp"/><path class="pc7966bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hot-spring"} {...others} />);
}

export default Component;
