import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw2ojp_cc.css';
import '../../css/e/e04op1bwe.css';
import '../../css/g/gutycobgs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bw2ojp_cc"/><path class="e04op1bwe"/><path class="gutycobgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager-dark"} {...others} />);
}

export default Component;
