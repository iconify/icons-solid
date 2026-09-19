import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xrancerjs.css';
import '../../css/a/azrk7m73e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xrancerjs"/><path class="azrk7m73e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:full-selection"} {...others} />);
}

export default Component;
