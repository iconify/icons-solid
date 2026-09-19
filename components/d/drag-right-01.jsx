import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h2pji8xlj.css';
import '../../css/k/k15y3ekvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h2pji8xlj"/><path class="k15y3ekvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drag-right-01"} {...others} />);
}

export default Component;
