import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/arzdxab4s.css';
import '../../css/r/r6-zig0wd.css';
import '../../css/u/uihgw98am.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="arzdxab4s"/><path class="r6-zig0wd"/><path class="uihgw98am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:calculator"} {...others} />);
}

export default Component;
