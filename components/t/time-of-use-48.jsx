import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm295izdf.css';
import '../../css/f/faw5_bbxe.css';
import '../../css/l/lkg0w6bmm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xm295izdf"/><path class="faw5_bbxe"/><path class="lkg0w6bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:time-of-use-48"} {...others} />);
}

export default Component;
