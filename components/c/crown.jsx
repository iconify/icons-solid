import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/z1fu_mb4n.css';
import '../../css/l/lk69x9__v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="z1fu_mb4n"/><path class="lk69x9__v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:crown"} {...others} />);
}

export default Component;
