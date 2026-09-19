import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j8-ow0blu.css';
import '../../css/i/i381ehb9p.css';
import '../../css/y/y0qmgo4nn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j8-ow0blu"/><path class="i381ehb9p"/><path class="y0qmgo4nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:list-bottom"} {...others} />);
}

export default Component;
