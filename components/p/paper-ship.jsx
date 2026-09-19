import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mk4rcgb2l.css';
import '../../css/b/b98o3ib5q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mk4rcgb2l"/><path class="b98o3ib5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:paper-ship"} {...others} />);
}

export default Component;
