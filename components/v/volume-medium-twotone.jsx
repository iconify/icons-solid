import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd6xzq.css';
import '../../css/y/ydovum.css';
import '../../css/z/zyfiet.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-u-uo_p.css';
import '../../css/d/d-5-a1ir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd6xzq ydovum"/><path class="ydovum zyfiet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:volume-medium-twotone"} {...others} />);
}

export default Component;
