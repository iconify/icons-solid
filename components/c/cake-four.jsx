import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wqc8scbug.css';
import '../../css/r/r02kiebwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="wqc8scbug"/><path class="r02kiebwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cake-four"} {...others} />);
}

export default Component;
