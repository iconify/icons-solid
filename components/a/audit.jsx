import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jggl5lblz.css';
import '../../css/f/f1r26vbpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jggl5lblz"/><path class="f1r26vbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:audit"} {...others} />);
}

export default Component;
