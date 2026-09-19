import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q2urjdbqv.css';
import '../../css/s/s5bwrobcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="q2urjdbqv"/><path class="s5bwrobcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-clock"} {...others} />);
}

export default Component;
