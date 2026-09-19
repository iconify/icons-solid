import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vres0fabx.css';
import '../../css/v/vwunhkbts.css';
import '../../css/g/g5flyubde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vres0fabx"/><path class="vwunhkbts"/><path class="g5flyubde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bachelor-cap-one"} {...others} />);
}

export default Component;
