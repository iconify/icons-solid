import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy2pzrflv.css';
import '../../css/o/oyd37-buh.css';
import '../../css/y/yjj9at6oo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yy2pzrflv"/><path class="oyd37-buh"/><path class="yjj9at6oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-press-20-bold"} {...others} />);
}

export default Component;
