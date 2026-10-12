import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziq_jfbrt.css';
import '../../css/q/q8ejpmbvv.css';
import '../../css/n/nsckargef.css';
import '../../css/d/d0j5fxbsi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ziq_jfbrt"/><path class="q8ejpmbvv"/><path class="nsckargef"/><path class="d0j5fxbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crutch-48"} {...others} />);
}

export default Component;
