import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yor0a7bzn.css';
import '../../css/h/hir2mbb0k.css';
import '../../css/h/hj176wbmq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yor0a7bzn"/><path class="hir2mbb0k"/><path class="hj176wbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:webhook-16"} {...others} />);
}

export default Component;
