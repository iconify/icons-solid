import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syxlvzekp.css';
import '../../css/s/sq-atxafu.css';
import '../../css/x/xaagdbbhy.css';
import '../../css/g/g-sqo_w-s.css';
import '../../css/g/g00kaobwl.css';

const viewBox = {"width":54,"height":100};
const content = `<path class="syxlvzekp"/><path class="sq-atxafu"/><path class="xaagdbbhy"/><path class="g-sqo_w-s"/><path class="g00kaobwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:android1"} {...others} />);
}

export default Component;
