import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yuh2hpbud.css';
import '../../css/b/buuf9vhap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yuh2hpbud"/><path class="buuf9vhap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:building2"} {...others} />);
}

export default Component;
