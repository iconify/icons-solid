import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8ob31epl.css';
import '../../css/r/r_44_2-ul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y8ob31epl"/><path class="r_44_2-ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chip"} {...others} />);
}

export default Component;
