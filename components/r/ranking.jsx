import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/od54xeb9w.css';
import '../../css/v/v_6x56b4c.css';
import '../../css/h/hb1ntvjpb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="od54xeb9w"/><path class="v_6x56b4c"/><path class="hb1ntvjpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ranking"} {...others} />);
}

export default Component;
