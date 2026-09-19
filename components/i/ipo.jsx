import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r-6edhb6a.css';
import '../../css/t/t25bmmb3e.css';
import '../../css/w/w89lc-bsd.css';
import '../../css/u/ub3rqnfjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r-6edhb6a"/><path class="t25bmmb3e"/><path class="w89lc-bsd"/><ellipse class="ub3rqnfjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ipo"} {...others} />);
}

export default Component;
