import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/frjwkab9r.css';
import '../../css/r/r5ew9ebzo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="frjwkab9r"/><path class="r5ew9ebzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lightbulb"} {...others} />);
}

export default Component;
