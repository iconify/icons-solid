import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjr53p4wm.css';
import '../../css/j/jx_02mklt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xjr53p4wm"/><path class="jx_02mklt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-20-bold"} {...others} />);
}

export default Component;
