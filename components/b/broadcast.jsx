import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cc0c66gik.css';
import '../../css/q/qczan3bwo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cc0c66gik"/><path class="qczan3bwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:broadcast"} {...others} />);
}

export default Component;
