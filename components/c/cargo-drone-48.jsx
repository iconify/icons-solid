import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x544oac-s.css';
import '../../css/j/jatki5qtj.css';
import '../../css/y/ya3rincjc.css';
import '../../css/y/yp0n6ibvk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x544oac-s"/><path class="jatki5qtj"/><path class="ya3rincjc"/><path class="yp0n6ibvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-drone-48"} {...others} />);
}

export default Component;
