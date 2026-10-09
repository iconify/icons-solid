import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/w/w4wlpvbuu.css';
import '../../css/x/xjml5ebvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="w4wlpvbuu"/><path class="xjml5ebvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:target-20"} {...others} />);
}

export default Component;
