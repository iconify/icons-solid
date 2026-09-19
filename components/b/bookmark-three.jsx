import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rf5x0l6rm.css';
import '../../css/b/b3c2jhbey.css';
import '../../css/d/dif4nrblo.css';
import '../../css/q/qgwr9vbgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rf5x0l6rm"/><path class="b3c2jhbey"/><path class="dif4nrblo"/><path class="qgwr9vbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bookmark-three"} {...others} />);
}

export default Component;
