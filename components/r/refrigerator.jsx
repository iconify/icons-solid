import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/przdtvn4g.css';
import '../../css/b/bjd584byl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="przdtvn4g"/><path class="bjd584byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:refrigerator"} {...others} />);
}

export default Component;
