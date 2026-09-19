import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d8ouolbqn.css';
import '../../css/w/wbasp_ynt.css';
import '../../css/w/wp3pith5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="d8ouolbqn"/><path class="wbasp_ynt"/><path class="wp3pith5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:picture-album"} {...others} />);
}

export default Component;
