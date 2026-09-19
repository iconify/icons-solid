import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ohsqqcc5j.css';
import '../../css/q/q7nw25yhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ohsqqcc5j"/><path class="q7nw25yhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:petrol"} {...others} />);
}

export default Component;
