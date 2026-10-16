import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k83ntuifl.css';
import '../../css/m/maz9ht0sw.css';
import '../../css/y/yxfra0bqr.css';
import '../../css/w/we3m-pbfh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k83ntuifl"/><path class="maz9ht0sw"/><path class="yxfra0bqr"/><path class="we3m-pbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-cable-20"} {...others} />);
}

export default Component;
