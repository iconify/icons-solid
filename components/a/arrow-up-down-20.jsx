import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/burqsaclr.css';
import '../../css/z/zslpuabll.css';
import '../../css/m/mxw0qifka.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="burqsaclr"/><path class="zslpuabll"/><path class="mxw0qifka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-down-20"} {...others} />);
}

export default Component;
