import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1y6bsbqe.css';
import '../../css/a/aldux5bbv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n1y6bsbqe"/><path class="aldux5bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-mask-20"} {...others} />);
}

export default Component;
