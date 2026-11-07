import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxgoffwmm.css';
import '../../css/y/ywojd67ji.css';
import '../../css/k/khsdxy-1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxgoffwmm"/><path class="ywojd67ji"/><path class="khsdxy-1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-bold-duotone"} {...others} />);
}

export default Component;
