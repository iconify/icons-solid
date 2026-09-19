import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xzkp8w4-s.css';
import '../../css/u/uat-p8b4u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xzkp8w4-s"/><path class="uat-p8b4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:experiment-one"} {...others} />);
}

export default Component;
