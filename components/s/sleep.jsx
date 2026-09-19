import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jge4l-p6y.css';
import '../../css/k/kvnld0b2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jge4l-p6y"/><path class="kvnld0b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sleep"} {...others} />);
}

export default Component;
