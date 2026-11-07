import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/x/xq9-69b7x.css';
import '../../css/l/lv_4r6b_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="xq9-69b7x"/><path class="lv_4r6b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
