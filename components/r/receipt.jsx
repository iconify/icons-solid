import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gtpf2q4_i.css';
import '../../css/d/dr87klbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gtpf2q4_i"/><path class="dr87klbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:receipt"} {...others} />);
}

export default Component;
