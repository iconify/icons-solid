import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o76v0vh3i.css';
import '../../css/x/xdmoomhwk.css';
import '../../css/x/x8q1kacfw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="o76v0vh3i"/><path class="xdmoomhwk"/><path class="x8q1kacfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:send-to-back"} {...others} />);
}

export default Component;
