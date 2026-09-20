import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p-xpucc4o.css';
import '../../css/g/gmg8febjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p-xpucc4o"/><path class="gmg8febjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:3d-rotate-y-axis"} {...others} />);
}

export default Component;
