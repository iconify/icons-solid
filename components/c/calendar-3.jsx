import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qlkso8blm.css';
import '../../css/k/kn0ah0b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qlkso8blm"/><path class="kn0ah0b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:calendar-3"} {...others} />);
}

export default Component;
