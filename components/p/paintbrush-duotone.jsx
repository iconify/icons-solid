import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re31xacew.css';
import '../../css/x/xaqffbcng.css';
import '../../css/y/y6pqfebos.css';
import '../../css/n/n2wq2ypgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="re31xacew"/><path class="xaqffbcng"/><path class="y6pqfebos"/><path class="n2wq2ypgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paintbrush-duotone"} {...others} />);
}

export default Component;
