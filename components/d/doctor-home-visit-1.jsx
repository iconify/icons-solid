import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k022anb7p.css';
import '../../css/t/t8er8nbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k022anb7p"/><path class="t8er8nbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:doctor-home-visit-1"} {...others} />);
}

export default Component;
