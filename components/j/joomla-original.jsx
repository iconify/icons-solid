import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oynj5eb_n.css';
import '../../css/x/xvk-o3hyl.css';
import '../../css/c/csibq1blo.css';
import '../../css/t/tv9ch67sw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="oynj5eb_n"/><path class="xvk-o3hyl"/><path class="csibq1blo"/><path class="tv9ch67sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:joomla-original"} {...others} />);
}

export default Component;
