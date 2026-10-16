import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-sroiact.css';
import '../../css/a/a3h9c1bxc.css';
import '../../css/y/y-j487bxe.css';
import '../../css/a/amp2bxb4g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t-sroiact"/><path class="a3h9c1bxc"/><path class="y-j487bxe"/><path class="amp2bxb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bench-vice-20"} {...others} />);
}

export default Component;
