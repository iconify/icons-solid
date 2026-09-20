import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/co11bsb3j.css';
import '../../css/q/qj5tj5n2x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="co11bsb3j"/><path class="qj5tj5n2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graph-bar-increase"} {...others} />);
}

export default Component;
