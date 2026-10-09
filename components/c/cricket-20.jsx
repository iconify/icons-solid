import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkayohb4a.css';
import '../../css/n/n76vy6bdn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkayohb4a"/><path class="n76vy6bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cricket-20"} {...others} />);
}

export default Component;
