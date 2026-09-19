import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oo5yojb6u.css';
import '../../css/t/tavlapbbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="oo5yojb6u"/><path class="tavlapbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:watermelon"} {...others} />);
}

export default Component;
