import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xqyp4q2de.css';
import '../../css/b/brqvdqb4k.css';
import '../../css/q/qiw5s9b3c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="xqyp4q2de"/><path class="brqvdqb4k"/><path class="qiw5s9b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:transport"} {...others} />);
}

export default Component;
