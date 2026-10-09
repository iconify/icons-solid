import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c25jzkbsf.css';
import '../../css/w/wy4_yib2c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c25jzkbsf"/><path class="wy4_yib2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-to-line-20"} {...others} />);
}

export default Component;
