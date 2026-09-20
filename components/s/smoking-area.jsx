import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w-xmu88jl.css';
import '../../css/h/hiexi2w6k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="w-xmu88jl"/><path class="hiexi2w6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smoking-area"} {...others} />);
}

export default Component;
