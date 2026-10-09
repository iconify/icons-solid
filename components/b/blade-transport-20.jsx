import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bji1-u9xf.css';
import '../../css/w/wuqcbyrvq.css';
import '../../css/a/a_99z_b0t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bji1-u9xf"/><path class="wuqcbyrvq"/><path class="a_99z_b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-transport-20"} {...others} />);
}

export default Component;
