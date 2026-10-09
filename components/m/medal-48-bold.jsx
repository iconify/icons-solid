import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzhgbf3_i.css';
import '../../css/o/o_os-tbha.css';
import '../../css/y/yk66m8x8g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lzhgbf3_i"/><path class="o_os-tbha"/><path class="yk66m8x8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:medal-48-bold"} {...others} />);
}

export default Component;
