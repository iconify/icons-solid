import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pidggdbss.css';
import '../../css/j/jgw8fgb3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="pidggdbss"/><path class="jgw8fgb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:order"} {...others} />);
}

export default Component;
