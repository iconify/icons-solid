import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u30j6c78d.css';
import '../../css/p/p_6tgjbsm.css';
import '../../css/y/yiybycb-p.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="u30j6c78d"/><path class="p_6tgjbsm"/><path class="yiybycb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:host-outline-alerted"} {...others} />);
}

export default Component;
