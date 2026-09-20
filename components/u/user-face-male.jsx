import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mke74wskt.css';
import '../../css/t/t61m25u4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="mke74wskt"/><path class="t61m25u4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-face-male"} {...others} />);
}

export default Component;
