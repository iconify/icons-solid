import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w21zh9bgn.css';
import '../../css/m/mz3iprbbx.css';
import '../../css/a/aypdxigqi.css';
import '../../css/c/cm4lp6e5o.css';
import '../../css/s/swjmkkbck.css';
import '../../css/h/hcn__41dd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w21zh9bgn"/><path class="mz3iprbbx"/><path class="aypdxigqi"/><path class="cm4lp6e5o"/><path class="swjmkkbck"/><path class="hcn__41dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:broken-heart"} {...others} />);
}

export default Component;
