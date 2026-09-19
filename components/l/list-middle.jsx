import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f2czm7m8z.css';
import '../../css/r/rqjfppbsd.css';
import '../../css/y/y0qmgo4nn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="f2czm7m8z"/><path class="rqjfppbsd"/><path class="y0qmgo4nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:list-middle"} {...others} />);
}

export default Component;
