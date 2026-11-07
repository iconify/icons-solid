import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zscshfblg.css';
import '../../css/f/fpavm-beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zscshfblg"/><path class="fpavm-beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
