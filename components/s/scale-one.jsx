import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dki2qy46y.css';
import '../../css/d/dzkcglbjk.css';
import '../../css/x/x1pn6ebie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dki2qy46y"/><path class="dzkcglbjk"/><path class="x1pn6ebie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scale-one"} {...others} />);
}

export default Component;
