import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq-zceb_w.css';
import '../../css/r/rhd8cdczy.css';
import '../../css/w/wuev9cbck.css';
import '../../css/g/gjeb820rg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lq-zceb_w"/><path class="rhd8cdczy"/><path class="wuev9cbck"/><circle class="gjeb820rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-aiops-insights"} {...others} />);
}

export default Component;
