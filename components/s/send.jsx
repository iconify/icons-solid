import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/odi8opbfk.css';
import '../../css/m/m20d08bum.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="odi8opbfk"/><path class="m20d08bum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:send"} {...others} />);
}

export default Component;
