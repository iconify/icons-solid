import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzkno5bug.css';
import '../../css/g/g1y745brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yzkno5bug"/><path class="g1y745brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:virtual-reality"} {...others} />);
}

export default Component;
