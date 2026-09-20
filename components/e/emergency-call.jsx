import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkyx-tb4m.css';
import '../../css/v/vos-_9xjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xkyx-tb4m"/><path class="vos-_9xjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:emergency-call"} {...others} />);
}

export default Component;
