import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y-f6hmbhh.css';
import '../../css/r/ra83ujb3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="y-f6hmbhh"/><path class="ra83ujb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:distribute-vertically"} {...others} />);
}

export default Component;
