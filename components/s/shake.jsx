import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a3egu4bnj.css';
import '../../css/y/yp5j8mbpq.css';
import '../../css/z/zri7a6b5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="a3egu4bnj"/><path class="yp5j8mbpq"/><path class="zri7a6b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shake"} {...others} />);
}

export default Component;
