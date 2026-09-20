import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_e3mnbwd.css';
import '../../css/b/b8504g80a.css';
import '../../css/m/myo_spbcy.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f_e3mnbwd"/><path class="b8504g80a"/><path class="myo_spbcy"/><path class="b2vvr6bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-split-line-duotone"} {...others} />);
}

export default Component;
