import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b3d8bdqux.css';
import '../../css/t/tye31zn0w.css';
import '../../css/b/bj4z4zz1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="b3d8bdqux"/><path class="tye31zn0w"/><path class="bj4z4zz1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:express-delivery"} {...others} />);
}

export default Component;
