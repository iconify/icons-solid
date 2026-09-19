import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zfnvhzb9k.css';
import '../../css/o/o1khnab1b.css';
import '../../css/h/hpzp4y6qo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zfnvhzb9k"/><path class="o1khnab1b"/><path class="hpzp4y6qo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:memory-card-one"} {...others} />);
}

export default Component;
