import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t__qwuc_d.css';
import '../../css/l/lrulo-bxw.css';
import '../../css/u/uak1w0bkv.css';
import '../../css/o/o93ggxb8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t__qwuc_d"/><path class="lrulo-bxw"/><path class="uak1w0bkv"/><path class="o93ggxb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-polar-20"} {...others} />);
}

export default Component;
