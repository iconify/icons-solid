import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxgoffwmm.css';
import '../../css/m/m5-5o8s_j.css';
import '../../css/y/ywojd67ji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxgoffwmm"/><path class="m5-5o8s_j"/><path class="ywojd67ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-bold"} {...others} />);
}

export default Component;
