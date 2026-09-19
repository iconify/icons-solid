import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/nl36872ts.css';
import '../../css/q/q1zk5yb4k.css';
import '../../css/h/h83h59bcb.css';
import '../../css/c/ccxrws8zy.css';
import '../../css/w/wb38q66tp.css';
import '../../css/s/sf0wytb7x.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><rect class="nl36872ts"/><path class="q1zk5yb4k"/><path class="h83h59bcb"/><path class="ccxrws8zy"/><path class="wb38q66tp"/><path class="sf0wytb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:chart"} {...others} />);
}

export default Component;
