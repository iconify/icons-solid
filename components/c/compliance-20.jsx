import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-myk9bcg.css';
import '../../css/f/fc_ybimmu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-myk9bcg"/><path class="fc_ybimmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compliance-20"} {...others} />);
}

export default Component;
