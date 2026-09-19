import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zdja7pbuk.css';
import '../../css/j/jroqwgjpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zdja7pbuk"/><path class="jroqwgjpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:music"} {...others} />);
}

export default Component;
