import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzmbifb1k.css';
import '../../css/o/oudolenqd.css';
import '../../css/o/o3jl589pi.css';
import '../../css/y/y_3awmanz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="nzmbifb1k"/><path class="oudolenqd"/><circle class="o3jl589pi"/><path class="y_3awmanz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bell-electric"} {...others} />);
}

export default Component;
