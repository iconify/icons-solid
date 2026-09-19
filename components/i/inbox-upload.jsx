import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b0_9a-hye.css';
import '../../css/a/alp68_g1x.css';
import '../../css/y/yq35rx1fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="b0_9a-hye"/><path class="alp68_g1x"/><path class="yq35rx1fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inbox-upload"} {...others} />);
}

export default Component;
