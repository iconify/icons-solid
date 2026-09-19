import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c_4c5cc2r.css';
import '../../css/q/qj-74wbfr.css';
import '../../css/o/outxdn7yt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="c_4c5cc2r"/><circle class="qj-74wbfr"/><path class="outxdn7yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:email-search"} {...others} />);
}

export default Component;
