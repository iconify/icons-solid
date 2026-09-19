import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xwrx3_xpt.css';
import '../../css/s/ssgpo9gdy.css';
import '../../css/p/plgn6t3fk.css';
import '../../css/l/lwothbb2u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="xwrx3_xpt"/><path class="ssgpo9gdy"/><ellipse class="plgn6t3fk"/><path class="lwothbb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scoreboard"} {...others} />);
}

export default Component;
