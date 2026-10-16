import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k64ba8bom.css';
import '../../css/x/x5d5bbilf.css';
import '../../css/x/x77xoabnh.css';
import '../../css/y/yoxmr3_pi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k64ba8bom"/><path class="x5d5bbilf"/><path class="x77xoabnh"/><path class="yoxmr3_pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:photodiode-20"} {...others} />);
}

export default Component;
