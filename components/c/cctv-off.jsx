import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fxh2tf26t.css';
import '../../css/f/fkxmg5b_v.css';
import '../../css/o/ogsqvhb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fxh2tf26t"/><path class="fkxmg5b_v"/><path class="ogsqvhb8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cctv-off"} {...others} />);
}

export default Component;
