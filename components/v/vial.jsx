import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cmtf-dnpo.css';
import '../../css/p/pjrd2oxhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cmtf-dnpo"/><path class="pjrd2oxhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vial"} {...others} />);
}

export default Component;
