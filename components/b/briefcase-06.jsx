import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw5hulxel.css';
import '../../css/u/uyep4_z_f.css';
import '../../css/o/ohnoc3s5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dw5hulxel"/><path class="uyep4_z_f"/><path class="ohnoc3s5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-06"} {...others} />);
}

export default Component;
