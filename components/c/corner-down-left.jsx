import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld6wmvy9y.css';
import '../../css/p/pfe73tbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ld6wmvy9y"/><path class="pfe73tbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-down-left"} {...others} />);
}

export default Component;
