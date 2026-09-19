import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vw0fviyvx.css';
import '../../css/j/jo108-7wp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="vw0fviyvx"/><path class="jo108-7wp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:new-computer"} {...others} />);
}

export default Component;
